import React from "react";
import './Main.scss'
import bird1 from '../images/bird1.png'
import bird2 from '../images/bird2.png'
import forest from '../images/forest.png'
import rocks from '../images/rocks.png'
import water from '../images/water.png'

export default function Main() {


    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        let text = document.getElementById('text');
        let bird1 = document.getElementById('bird1');
        let bird2 = document.getElementById('bird2');
        let btn = document.getElementById('btn');
        let rocks = document.getElementById('rocks');
        let forest = document.getElementById('forest');
        let water = document.getElementById('water');
        let header = document.getElementById('header');


        text.style.top = 50 + value * -0.5 + '%' ;
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * 2 + 'px';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * -5 + 'px';
        rocks.style.top = value * -0.12 +'px';
        forest.style.top = value * 0.25 + 'px';
        header.style.top = value * -0.5 + 'px';
    })

    return(
        <div className='MainWrapper'>
            <section>
                <h2 id="text"><span>It`s time for a new</span><br/>Adventure</h2>
                <img src={bird1} id="bird1" alt="тут птичка"/>
                <img src={bird2} id="bird2" alt="и тут птичка"/>
                <img src={forest} id="forest" alt="а тут лес"/>
                <img src={rocks} id="rocks" alt="тут камушки"/>
                <img src={water} id="water" alt="а тут водичка"/>
            </section>
            <div className="sec">
                <h2>Parallax Scrolling Effects</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur magni quis aliquid neque maxime,
                    et veritatis doloremque. Facere excepturi, delectus minima id saepe neque accusamus dolorum ipsam
                    voluptate maxime.
                </p>
            </div>
        </div>
    )
}