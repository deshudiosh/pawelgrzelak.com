class City{
    constructor(orb){
        this.orb = orb;

        this.scale = {"x": r(.5, 1), "y": r(.7, 1)};
        // this.scale = {"x":1, "y":1};
        
        let angleWidth = r(10, 40);
        // angWidth = 40;
        angleWidth *= this.scale.x;
        this.angleWidth = angleWidth;

        //////// city rotation, light edge aware
        let rot = r(-5, 5); // initial rot
        // rot = 0; // TEST

        let lightHalfAngle = 90;
        lightHalfAngle += map(R_LIGHT_BIAS, .5, 1, 30, 0);
        let lightRot = R_LIGHT_ROT >= 180 ? R_LIGHT_ROT - 360 : R_LIGHT_ROT
        let lightStartAng = lightRot - lightHalfAngle;
        let lightEndAng = lightRot + lightHalfAngle;

        let topEdge = abs(lightStartAng) < abs(lightEndAng) ? lightStartAng : lightEndAng;

        let overlapMargin = 15;
        let leftOvelap = (angleWidth/2-rot) + topEdge + overlapMargin;
        let rightOverlap = -((-angleWidth/2-rot) + topEdge) + overlapMargin;
        // console.log(leftOvelap, rightOverlap);

        if(leftOvelap > 0 && leftOvelap <= rightOverlap) rot += leftOvelap;
        if(rightOverlap > 0 && rightOverlap < leftOvelap) rot -= rightOverlap;

        this.rot = rot;

        let daytime = rot >= lightStartAng && rot <= lightEndAng;
        if(R_LIGHT_INV) daytime = !daytime;
        this.daytime = daytime;

        /////////// rotation end //////
    }

    initPostSpawn(){
        let angleWidth = this.angleWidth;
        let orb = this.orb;

        let num = angleWidth/r(3, 4);
        num *= 1/this.scale.x;
        let rotRand = angleWidth/num/4;

        let inset = orb.isShaped ? .92 : .95;
        this.pivot = createVector(0, -orb.size/2 * inset);

        this.buildings = [];
        for (let i = 0; i < num; i++) {;
            let prog = map(i, 0, num, 0, 1, true);

            let pivot = this.pivot.copy();
            pivot.rotate(map(prog, 0, 1, -angleWidth/2, angleWidth/2));
            
            pivot.rotate(r(-rotRand, rotRand));
            pivot.add(orb.center.copy());

            let yScale = prog * 2;
            if(yScale == 2) yScale = 0;
            if(yScale > 1) yScale = 1 - fract(yScale);
            yScale = map(yScale, 0, 1, .4, 1);
            
            // pivot.y += yScale * orb.size / 12;

            this.buildings.push(new Building(this, pivot, yScale))
        }

        this.buildings.sort(() => r(-.5, .5)); // random order

        this.buildings.forEach(b => b.initPostSpawn());
        this.bush = new Bush(this);
    }

    drawToGraphics(){
        let g = createGraphics(RES, RES);
        g.angleMode(DEGREES);

        let mask = createGraphics(RES, RES);
        mask.angleMode(DEGREES);

        // this.gToPurge.push();
                
        this.buildings.forEach(b => {
            this.shadowOn(g, b.drawSize.x);

            let offset = b.pivot.copy();
            
            // rotate around planet center
            offset.sub(this.orb.center)
            offset.rotate(this.rot);
            offset.add(this.orb.center)
            
            g.resetMatrix();
            g.translate(offset.x * RES, offset.y * RES);            
            g.rotate(this.rot);
            g.translate(-b.drawSize.x/2 * RES, -b.drawSize.y * RES);            
            g.image(b.getGraphics(), 0, 0);

            this.shadowOff(g);

            mask.resetMatrix();
            mask.translate(offset.x * RES, offset.y * RES);            
            mask.rotate(this.rot);
            mask.translate(-b.drawSize.x/2 * RES, -b.drawSize.y * RES);            
            mask.image(b.getMask(), 0, 0);

            // building instant purge
            b.purge();
        });
        
        let gImg = g.get();
        g.remove();
        gImg.mask(mask);

        this.graphics = gImg;
        this.mask = mask.get();

        mask.remove();
    }

    drawGraphicsToCanvas(){
        image(this.graphics, 0, 0);
        this.bush.draw();
    }

    shadowOn(g, sizeX){
        g.drawingContext.shadowOffsetX = sizeX/6 * RES;
        g.drawingContext.shadowOffsetY = sizeX/4 * RES;
        g.drawingContext.shadowBlur = sizeX/6 * RES;
        g.drawingContext.shadowColor = color(0, 0, 0, 180);
    }

    shadowOff(g){
        g.drawingContext.shadowColor = color(0, 0, 0, 0);
    }
}