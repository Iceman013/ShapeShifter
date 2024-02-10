export class Shape {
    constructor(name, points) {
        this.name = name;
        this.points = points;
        this.tempPoints = [];
        this.width = 2;
        this.color = "#000000";
    }

    draw(dimension) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');
        function drawLine(start, end) {
            let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            newLine.setAttribute('x1', dimension*start.x);
            newLine.setAttribute('y1', dimension*start.y);
            newLine.setAttribute('x2', dimension*end.x);
            newLine.setAttribute('y2', dimension*end.y);
            newLine.setAttribute("stroke", "black");
            newLine.setAttribute('stroke-width', 2);
            return newLine;
        }
        for (let i = 0; i < this.points.length; i++) {
            let line = drawLine(this.points[i], this.points[(i + 1)%this.points.length]);
            svg.append(line);
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
        function drawLine(start, end) {
            let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            newLine.setAttribute('x1', dimension*start.x);
            newLine.setAttribute('y1', dimension*start.y);
            newLine.setAttribute('x2', dimension*end.x);
            newLine.setAttribute('y2', dimension*end.y);
            newLine.setAttribute("stroke", me.color);
            newLine.setAttribute('stroke-width', me.width);
            return newLine;
        }
        for (let i = 0; i < this.tempPoints.length; i++) {
            let line = drawLine(this.tempPoints[i], this.tempPoints[(i + 1)%this.tempPoints.length]);
            svg.append(line);
        }
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
        document.getElementById("output").innerHTML = this.color;
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