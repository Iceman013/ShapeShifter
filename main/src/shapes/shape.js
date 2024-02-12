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

    // Draw shape
    draw(dimension, verticies, edit) {
        if (typeof verticies == "undefined") {
            verticies = this.points;
        }
        if (typeof edit == "undefined") {
            edit = false;
        }
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
        let middleText = "M " + Math.floor(dimension*verticies[0].x) + " " + Math.floor(dimension*verticies[0].y);
        for (let i = 1; i < verticies.length; i++) {
            middleText += " L " + Math.floor(dimension*verticies[i].x) + " " + Math.floor(dimension*verticies[i].y);
        }
        middleText += " Z";
        newPath.setAttributeNS(null, "d", middleText);
        svg.append(newPath);
        if (edit) {
            for (let i = 0; i < verticies.length; i++) {
                let point = drawPoint(verticies[i]);
                svg.append(point);
            }
        }
        return svg;
    }

    // Draw updated shape based on sliders
    redraw() {
        let base = document.getElementById("shapeViewer");
        base.style.height = base.clientWidth + "px";
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        let drawn = this.draw(base.clientWidth, this.tempPoints, true);
        drawn.id = "custom";
        base.appendChild(drawn);

        let hidden = document.getElementById("hiddenCopy");
        hidden.style.width = base.clientWidth + "px";
        hidden.style.height = base.clientHeight + "px";
        document.getElementById("myCanvas").width = base.clientWidth;
        document.getElementById("myCanvas").height = base.clientHeight;
        while (hidden.firstChild) {
            hidden.removeChild(hidden.firstChild);
        }
        let drawnR = this.draw(base.clientWidth, this.tempPoints, false);
        drawnR.id = "hiddenReal";
        hidden.appendChild(drawnR);
    }

    // Verticies dragging controls
    mouseMove(event) {
        if (this.chosen != -1) {
            let size = document.getElementById("shapeViewer").clientWidth;
            this.tempPoints[this.chosen].x = event.offsetX/size;
            this.tempPoints[this.chosen].y = event.offsetY/size;
            if (this.tempPoints[this.chosen].x < 0) {
                this.tempPoints[this.chosen].x = 0;
            }
            if (this.tempPoints[this.chosen].x > 1) {
                this.tempPoints[this.chosen].x = 1;
            }
            if (this.tempPoints[this.chosen].y < 0) {
                this.tempPoints[this.chosen].y = 0;
            }
            if (this.tempPoints[this.chosen].y > 1) {
                this.tempPoints[this.chosen].y = 1;
            }
            this.redraw();
        }
    }
    mouseUp(event) {
        this.chosen = -1;
    }
    mouseDown(event) {
        let closest = -1;
        let dist = 9999999999;
        for (let i = 0; i < this.tempPoints.length; i++) {
            let myDist = Math.pow(this.tempPoints[i].x - event.offsetX/250, 2) + Math.pow(this.tempPoints[i].y - event.offsetY/250, 2);
            if (myDist < dist) {
                dist = myDist;
                closest = i;
            }
        }
        this.chosen = closest;
    }

    // Display editting sidebar
    editMode() {
        this.tempPoints = [];
        for (let i = 0; i < this.points.length; i++) {
            this.tempPoints[i] = {
                "x": this.points[i].x,
                "y": this.points[i].y
            };
        }
        this.chosen = -1;
        this.fill = true;
        this.fillColor = "#000000";
        this.opacity = 1;
        this.width = 2;
        this.color = "#000000";
        document.getElementById("fill").checked = this.fill;
        document.getElementById("fillColor").value = this.fillColor;
        document.getElementById("opacity").value = this.opacity;
        document.getElementById("weight").value = this.width;
        document.getElementById("color").value = this.color;

        const me = this;

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