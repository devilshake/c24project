const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,hammer,iron,bouncyball;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,
sand11,sand12,sand13,sand14,sand15,sand16,sand17,sand18,sand19,sand20,
sand21,sand22,sand23,sand24,sand25,sand26,sand27,sand28,sand29,sand30,
sand31,sand32,sand33,sand34,sand35,sand36,sand37,sand38,sand39,sand40;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);

    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(530,450,10);
    sand7 = new Sand(535,445,10);
    sand8 = new Sand(540,445,10);
    sand9 = new Sand(545,445,10);
    sand10 = new Sand(550,445,10);
    sand11 = new Sand(555,450,10);
    sand12 = new Sand(560,450,10);
    sand13 = new Sand(565,450,10);
    sand14 = new Sand(570,450,10);
    sand15 = new Sand(575,450,10);
    sand16 = new Sand(580,450,10);
    sand17 = new Sand(585,445,10);
    sand18 = new Sand(590,445,10);
    sand19 = new Sand(595,445,10);
    sand20 = new Sand(600,445,10);
    sand21 = new Sand(605,450,10);
    sand22 = new Sand(610,450,10);
    sand23 = new Sand(615,450,10);
    sand24 = new Sand(620,450,10);
    sand25 = new Sand(625,450,10);
    sand26 = new Sand(630,450,10);
    sand27 = new Sand(635,445,10);
    sand28 = new Sand(640,445,10);
    sand29 = new Sand(645,445,10);
    sand30 = new Sand(650,445,10);
    sand31 = new Sand(655,450,10);
    sand32 = new Sand(660,450,10);
    sand33 = new Sand(665,450,10);
    sand34 = new Sand(670,450,10);
    sand35 = new Sand(675,450,10);
    sand36 = new Sand(680,450,10);
    sand37 = new Sand(685,445,10);
    sand38 = new Sand(690,445,10);
    sand39 = new Sand(695,445,10);
    sand40 = new Sand(700,445,10);
    bouncyball = new BouncyBall(795,320,100);
  

    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();

    sand1.display(); 
    sand2.display(); 
    sand3.display(); 
    sand4.display(); 
    sand5.display(); 
    sand6.display(); 
    sand7.display(); 
    sand8.display(); 
    sand9.display(); 
    sand10.display(); 
    sand11.display(); 
    sand12.display(); 
    sand13.display(); 
    sand14.display(); 
    sand15.display(); 
    sand16.display(); 
    sand17.display(); 
    sand18.display(); 
    sand19.display(); 
    sand20.display(); 
    sand21.display(); 
    sand22.display(); 
    sand23.display(); 
    sand24.display(); 
    sand25.display(); 
    sand26.display(); 
    sand27.display(); 
    sand28.display(); 
    sand29.display(); 
    sand30.display(); 
    sand31.display(); 
    sand32.display(); 
    sand33.display(); 
    sand34.display(); 
    sand35.display(); 
    sand36.display(); 
    sand37.display(); 
    sand38.display(); 
    sand39.display(); 
    sand40.display(); 
   
    iron.display();
    hammer.display();
    bouncyball.display();

 
}
