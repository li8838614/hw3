//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    
    // fill in your code here.
    // delete the code below first.
   
    addTriangle (0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5);
    addTriangle (0.5,0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5);
    addTriangle (-0.5, 0.5, -0.5,-0.5, -0.5, 0.5,  -0.5, -0.5, -0.5);
    addTriangle (-0.5, -0.5, 0.5,-0.5,0.5, -0.5, -0.5, 0.5, 0.5);
    addTriangle (0.5, 0.5, -0.5,-0.5, 0.5, 0.5,  -0.5, 0.5, -0.5);
    addTriangle (-0.5, 0.5, 0.5,0.5, 0.5, -0.5,  0.5, 0.5, 0.5);
    addTriangle (-0.5, -0.5, 0.5,0.5, -0.5, -0.5,  -0.5, -0.5, -0.5);
    addTriangle (0.5, -0.5, -0.5,-0.5, -0.5, 0.5,  0.5, -0.5, 0.5);
    addTriangle (-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5);
    addTriangle (0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
    addTriangle ( 0.5, -0.5, -0.5,-0.5, 0.5, -0.5, -0.5, -0.5, -0.5);
    addTriangle ( -0.5, 0.5, -0.5,0.5, -0.5, -0.5, 0.5, 0.5, -0.5);
   
    
   
}
    
    


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    degree=360/radialdivision
    for (let i=0;i<radialdivision;i++){
        addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), 0.5,0, 0, 0.5,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), 0.5);
        addTriangle (0, 0, -0.5, 0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), -0.5, 0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), -0.5);
        for (let j=-0.5;j<0.5;j=j+1/heightdivision){
            addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j,0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j+1/heightdivision,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j);
            addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), j+1/heightdivision,0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j+1/heightdivision,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), j);

        }

    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    
    for (let i=0;i<radialdivision;i++){
        addTriangle (0.5*Math.cos(radians(i*degree)),0.5*Math.sin(radians(i*degree)), 0.5,0, 0, 0.5,  0.5*Math.cos(radians((i+1)*degree)),0.5*Math.sin(radians((1+i)*degree)), 0.5);
        for (let v=0;v<heightdivision;v++){
            j=-0.5+v/heightdivision;
            addTriangle ((v/heightdivision)*0.5*Math.cos(radians(i*degree)),(v/heightdivision)*0.5*Math.sin(radians(i*degree)), j,((v+1)/heightdivision)*0.5*Math.cos(radians(i*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians(i*degree)), j+1/heightdivision,  (v/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),(v/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j);
            addTriangle (((v+1)/heightdivision)*0.5*Math.cos(radians(i*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians(i*degree)), j+1/heightdivision,((v+1)/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),((v+1)/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j+1/heightdivision,  (v/heightdivision)*0.5*Math.cos(radians((i+1)*degree)),(v/heightdivision)*0.5*Math.sin(radians((1+i)*degree)), j);
        }
    }     
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    slices=slices+1;
    stacks=stacks+1;
    for (let i=0;i<slices;i++){
        for (let j=0;j<stacks+1;j++){
            x1=0.5*Math.cos(radians(360*i/slices))*Math.sin(radians(180*j/stacks));
            y1=0.5*Math.sin(radians(360*i/slices))*Math.sin(radians(180*j/stacks));
            z1=0.5*Math.cos(radians(180*j/stacks));
            x2=0.5*Math.cos(radians(360*(i+1)/slices))*Math.sin(radians(180*j/stacks));
            y2=0.5*Math.sin(radians(360*(i+1)/slices))*Math.sin(radians(180*j/stacks));
            z2=0.5*Math.cos(radians(180*j/stacks));
            x3=0.5*Math.cos(radians(360*i/slices))*Math.sin(radians(180*(j+1)/stacks));
            y3=0.5*Math.sin(radians(360*i/slices))*Math.sin(radians(180*(j+1)/stacks));
            z3=0.5*Math.cos(radians(180*(j+1)/stacks));
            x4=0.5*Math.cos(radians(360*(i+1)/slices))*Math.sin(radians(180*(j+1)/stacks));
            y4=0.5*Math.sin(radians(360*(i+1)/slices))*Math.sin(radians(180*(j+1)/stacks));
            z4=0.5*Math.cos(radians(180*(j+1)/stacks));
            addTriangle(x2,y2,z2,x1,y1,z1,x3,y3,z3);
            addTriangle(x1,y1,z1,x2,y2,z2,x3,y3,z3);
            addTriangle(x4,y4,z4,x2,y2,z2,x3,y3,z3);
            addTriangle(x2,y2,z2,x4,y4,z4,x3,y3,z3);
        }
    }
}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

