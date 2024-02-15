export class Shape {
    constructor(name, points) {
        this.name = name;
        this.points = points;
        this.tempPoints = [];
        this.width = 4;
        this.border = true;
        this.borderColor = "#000000";
        this.fill = true;
        this.fillColor = "#000000";
        this.dashes = [1];
        this.corner = "arcs";
        this.chosen = -1;
    }

    // Draw shape
    draw(dimension, verticies, edit) {
        // Deal with blank inputs
        if (typeof verticies == "undefined") {
            verticies = this.points;
        }
        if (typeof edit == "undefined") {
            edit = false;
        }

        // Create svg
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');

        // Make drag points
        const me = this;
        function drawPoint(vertex) {
            let point = document.createElementNS('http://www.w3.org/2000/svg','circle');
            point.setAttribute('cx', dimension*vertex.x);
            point.setAttribute('cy', dimension*vertex.y);
            point.setAttribute("r", Math.floor(me.width/2)*1.05 + 4);
            point.setAttribute('fill', "blue");
            if (vertex.type == "Q") {
                point.setAttribute('fill', "red");
            }
            return point;
        }

        // Create path
        let newPath = document.createElementNS("http://www.w3.org/2000/svg","path");

        // Add attributes
        newPath.setAttribute("stroke", this.borderColor);
        newPath.setAttribute("stroke-opacity", this.border);
        newPath.setAttribute('stroke-width', this.width);
        newPath.setAttribute("fill", this.fillColor);
        newPath.setAttribute("fill-opacity", this.fill);
        newPath.setAttribute("stroke-linejoin", this.corner);
        if (this.dashes.length > 1) {
            let dashlist = this.dashes[0]*this.width;
            for (let i = 1; i < this.dashes.length; i++) {
                dashlist += "," + this.dashes[i]*this.width;
            }
            newPath.setAttribute("stroke-dasharray", dashlist);
        }

        function addVText(index) {
            let pt = verticies[index%(verticies.length)];
            return Math.floor(dimension*pt.x) + " " + Math.floor(dimension*pt.y);
        }
        // Add each vertex
        let middleText = "M " + addVText(0);
        for (let i = 1; i < verticies.length; i++) {
            if (verticies[i].type == null) {
                middleText += " L " + addVText(i);
            } else if (verticies[i].type == "Q") {
                middleText += " Q " + addVText(i) + " " + addVText(i + 1);
                i++;
            }
        }
        middleText += " Z";
        newPath.setAttributeNS(null, "d", middleText);
        svg.append(newPath);

        // Draw drag points
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
        // Reset tempPoints
        this.tempPoints = [];
        for (let i = 0; i < this.points.length; i++) {
            this.tempPoints[i] = {
                "x": this.points[i].x,
                "y": this.points[i].y,
                "type": this.points[i].type
            };
        }

        // Reset default customization
        this.chosen = -1;
        this.fill = 1;
        this.fillColor = "#000000";
        this.border = 1;
        this.borderColor = "#000000";
        this.width = 4;
        this.dashes = 1;
        this.corner = "arcs";

        // Reset controls
        document.getElementById("fill").value = this.fill;
        document.getElementById("fillColor").value = this.fillColor;
        document.getElementById("border").value = this.border;
        document.getElementById("borderColor").value = this.borderColor;
        document.getElementById("weight").value = this.width;

        const me = this;

        // Set functions for vertex change controls (flip, rotate, etc)
        document.getElementById("flipH").addEventListener("click", function() {
            for (let i = 0; i < me.tempPoints.length; i++) {
                me.tempPoints[i].x = 1 - me.tempPoints[i].x;
            }
            me.redraw();
        });
        document.getElementById("flipV").addEventListener("click", function() {
            for (let i = 0; i < me.tempPoints.length; i++) {
                me.tempPoints[i].y = 1 - me.tempPoints[i].y;
            }
            me.redraw();
        });
        document.getElementById("rotR").addEventListener("click", function() {
            for (let i = 0; i < me.tempPoints.length; i++) {
                let tx = me.tempPoints[i].x;
                let ty = me.tempPoints[i].y;
                tx = tx - 0.5;
                ty = ty - 0.5;
                me.tempPoints[i].x = -1*ty + 0.5;
                me.tempPoints[i].y = tx + 0.5;
            }
            me.redraw();
        });
        document.getElementById("rotL").addEventListener("click", function() {
            for (let i = 0; i < me.tempPoints.length; i++) {
                let tx = me.tempPoints[i].x;
                let ty = me.tempPoints[i].y;
                tx = tx - 0.5;
                ty = ty - 0.5;
                me.tempPoints[i].x = ty + 0.5;
                me.tempPoints[i].y = -1*tx + 0.5;
            }
            me.redraw();
        });

        // Set functions for change of controls
        document.getElementById("fill").addEventListener("change", function() {
            me.fill = document.getElementById("fill").value;
            me.redraw();
        });
        document.getElementById("fillColor").addEventListener("change", function() {
            me.fillColor = document.getElementById("fillColor").value;
            me.redraw();
        });
        document.getElementById("border").addEventListener("change", function() {
            me.border = document.getElementById("border").value;
            me.redraw();
        });
        document.getElementById("borderColor").addEventListener("change", function() {
            me.borderColor = document.getElementById("borderColor").value;
            me.redraw();
        });
        document.getElementById("weight").addEventListener("input", function() {
            me.width = document.getElementById("weight").value;
            me.redraw();
        });
        document.getElementById("swap").addEventListener("click", function() {
            let temp = document.getElementById("fill").value;
            document.getElementById("fill").value = document.getElementById("border").value;
            document.getElementById("border").value = temp;

            temp = document.getElementById("fillColor").value;
            document.getElementById("fillColor").value = document.getElementById("borderColor").value;
            document.getElementById("borderColor").value = temp;

            me.fill = document.getElementById("fill").value;
            me.fillColor = document.getElementById("fillColor").value;
            me.border = document.getElementById("border").value;
            me.borderColor = document.getElementById("borderColor").value;
            me.redraw();
        });
        const dashlist = [{"id": "noDash", "array": [1]}, {"id": "dashed", "array": [3, 1]}, {"id": "dotted", "array": [1, 1]}];
        for (let i = 0; i < dashlist.length; i++) {
            const dashType = dashlist[i];
            document.getElementById(dashType.id).addEventListener("click", function() {
                me.dashes = dashType.array;
                for (let j = 0; j < dashlist.length; j++) {
                    document.getElementById(dashlist[j].id).classList.remove("active");
                }
                this.classList.add("active");
                me.redraw();
            });
            document.getElementById(dashType.id).classList.remove("active");
        }
        document.getElementById(dashlist[0].id).classList.add("active");

        const cornerlist = ["arcs", "bevel", "round"];
        for (let i = 0; i < cornerlist.length; i++) {
            const corner = cornerlist[i];
            document.getElementById(corner).addEventListener("click", function() {
                me.corner = corner;
                for (let j = 0; j < cornerlist.length; j++) {
                    document.getElementById(cornerlist[j]).classList.remove("active");
                }
                this.classList.add("active");
                me.redraw();
            });
            document.getElementById(corner).classList.remove("active");
        }
        document.getElementById(cornerlist[0]).classList.add("active");

        this.redraw();
    }
}