export class Shape {
    constructor(name, points) {
        this.name = name;
        this.points = points;
    }

    draw(dimension) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden","true");
        svg.setAttribute('viewbox', '0 0 ' + dimension + ' ' + dimension);
        svg.setAttribute('width', dimension + 'px');
        svg.setAttribute('height', dimension + 'px');
        function drawLine(start, end) {
            var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
            newLine.setAttribute('x1', dimension*start.x);
            newLine.setAttribute('y1', dimension*start.y);
            newLine.setAttribute('x2', dimension*end.x);
            newLine.setAttribute('y2', dimension*end.y);
            newLine.setAttribute("stroke", "black");
            return newLine;
        }
        for (let i = 0; i < this.points.length; i++) {
            let line = drawLine(this.points[i], this.points[(i + 1)%this.points.length]);
            svg.append(line);
        }
        return svg;
    }

    editMode() {
        document.getElementById("shapeSelector").style.display = "none";
        document.getElementById("shapeEditor").style.display = "block";

        let base = document.getElementById("shapeViewer");
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        let drawn = this.draw(250);
        drawn.id = "custom";
        base.appendChild(drawn);
    }
}