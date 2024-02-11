export class Shape {
    constructor(name, points) {
        this.name = name;
        this.points = points;
        this.tempPoints = [];
        this.width = 2;
        this.color = "#000000";
        this.fill = true;
        this.fillColor = "#000000";
        this.opacity = 1;
        this.chosen = -1;
    }

    draw(dimension) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');

        const me = this;

        let newPath = document.createElementNS("http://www.w3.org/2000/svg","path");
        newPath.setAttribute("stroke", me.color);
        newPath.setAttribute('stroke-width', me.width);
        newPath.setAttribute("opacity", me.opacity);
        if (me.fill) {
            newPath.setAttribute("fill", me.fillColor);
        } else {
            newPath.setAttribute("fill", "none");
        }
        let middleText = "M " + Math.floor(dimension*this.points[0].x) + " " + Math.floor(dimension*this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            middleText += " L " + Math.floor(dimension*this.points[i].x) + " " + Math.floor(dimension*this.points[i].y);
        }
        middleText += " Z";
        newPath.setAttributeNS(null, "d", middleText);
        svg.append(newPath);
        for (let i = 0; i < this.tempPoints.length; i++) {
            let point = drawPoint(this.tempPoints[i]);
            svg.append(point);
        }
        return svg;
    }
    editDraw(dimension) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');

        const me = this;
        function drawPoint(start) {
            let point = document.createElementNS('http://www.w3.org/2000/svg','circle');
            point.setAttribute('cx', dimension*start.x);
            point.setAttribute('cy', dimension*start.y);
            point.setAttribute("r", Math.floor(me.width/2)*1.05 + 4);
            point.setAttribute('fill', "blue");
            return point;
        }

        let newPath = document.createElementNS("http://www.w3.org/2000/svg","path");
        newPath.setAttribute("stroke", me.color);
        newPath.setAttribute('stroke-width', me.width);
        newPath.setAttribute("opacity", me.opacity);
        if (me.fill) {
            newPath.setAttribute("fill", me.fillColor);
        } else {
            newPath.setAttribute("fill", "none");
        }
        let middleText = "M " + Math.floor(dimension*this.tempPoints[0].x) + " " + Math.floor(dimension*this.tempPoints[0].y);
        for (let i = 1; i < this.tempPoints.length; i++) {
            middleText += " L " + Math.floor(dimension*this.tempPoints[i].x) + " " + Math.floor(dimension*this.tempPoints[i].y);
        }
        middleText += " Z";
        newPath.setAttributeNS(null, "d", middleText);
        svg.append(newPath);
        for (let i = 0; i < this.tempPoints.length; i++) {
            let point = drawPoint(this.tempPoints[i]);
            svg.append(point);
        }
        return svg;
    }

    editDrawReal(dimension) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');

        const me = this;

        let newPath = document.createElementNS("http://www.w3.org/2000/svg","path");
        newPath.setAttribute("stroke", me.color);
        newPath.setAttribute('stroke-width', me.width);
        newPath.setAttribute("opacity", me.opacity);
        if (me.fill) {
            newPath.setAttribute("fill", me.fillColor);
        } else {
            newPath.setAttribute("fill", "none");
        }
        let middleText = "M " + Math.floor(dimension*this.tempPoints[0].x) + " " + Math.floor(dimension*this.tempPoints[0].y);
        for (let i = 1; i < this.tempPoints.length; i++) {
            middleText += " L " + Math.floor(dimension*this.tempPoints[i].x) + " " + Math.floor(dimension*this.tempPoints[i].y);
        }
        middleText += " Z";
        newPath.setAttributeNS(null, "d", middleText);
        svg.append(newPath);
        return svg;
    }

    redraw() {
        let base = document.getElementById("shapeViewer");
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        let drawn = this.editDraw(250);
        drawn.id = "custom";
        base.appendChild(drawn);

        let hidden = document.getElementById("hiddenCopy");
        while (hidden.firstChild) {
            hidden.removeChild(hidden.firstChild);
        }
        let drawnR = this.editDrawReal(250);
        drawnR.id = "hiddenReal";
        hidden.appendChild(drawnR);
    }
    editMode() {
        document.getElementById("shapeSelector").style.display = "none";
        document.getElementById("shapeEditor").style.display = "block";
        this.tempPoints = this.points;
        this.width = 2;
        this.color = "#000000";
        document.getElementById("weight").value = this.width;
        document.getElementById("color").value = this.color;

        const me = this;


        document.getElementById("shapeViewer").addEventListener("mousemove", function(event) {
            if (me.chosen != -1) {
                me.tempPoints[me.chosen].x = event.offsetX/250;
                me.tempPoints[me.chosen].y = event.offsetY/250;
                me.redraw();
            }
        });
        document.getElementById("shapeViewer").addEventListener("mouseup", function() {
            me.chosen = -1;
        });
        document.getElementById("shapeViewer").addEventListener("mousedown", function(event) {
            let closest = -1;
            let dist = 9999999999;
            for (let i = 0; i < me.tempPoints.length; i++) {
                let myDist = Math.pow(me.tempPoints[i].x - event.offsetX/250, 2) + Math.pow(me.tempPoints[i].y - event.offsetY/250, 2);
                if (myDist < dist) {
                    dist = myDist;
                    closest = i;
                }
            }
            me.chosen = closest;
        });
        document.getElementById("fill").addEventListener("change", function() {
            me.fill = document.getElementById("fill").checked;
            me.redraw();
        });
        document.getElementById("fillColor").addEventListener("change", function() {
            me.fillColor = document.getElementById("fillColor").value;
            me.redraw();
        });
        document.getElementById("opacity").addEventListener("input", function() {
            me.opacity = document.getElementById("opacity").value;
            me.redraw();
        });
        document.getElementById("weight").addEventListener("input", function() {
            me.width = document.getElementById("weight").value;
            me.redraw();
        });
        document.getElementById("color").addEventListener("change", function() {
            me.color = document.getElementById("color").value;
            me.redraw();
        });

        this.redraw();
    }
}