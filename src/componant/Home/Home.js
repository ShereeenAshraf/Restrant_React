import React  from 'react';
import Header from './Header';
// import './../../index.css'
import './Home.css'
import prideimg from './../../assets/img-1.png'
import ingradients from './../../assets/img-2.png'
import Data from './../../Data';

const Home = () =>{
    const blogitems = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                <img src={item.img}/>
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                <button><a href='#'> order now</a></button>
                </div>
            </div>
        )
    })
    return(
        <>
        <Header/>

        {/* section 1  */}
        <section className='numbers'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>5786+</h2>
                        <h6>OHOTES</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>

        {/* section 2 */}

        <section className='pride'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={prideimg} title='img'/>
                    </div>
                    <div className='col-md-6'>
                        <h2> we pride ourselves on 
                            making real food from the best ingredients</h2>
                        <p>we pride ourselves on 
                        making real food from the best ingredients
                        we pride ourselves on 
                        making real food from the best ingredients</p>
                        <button><a href='#'>learn more</a></button>
                    </div>
                </div>
            </div>
        </section>

        {/* section 3  */}
        <section className='ingredients'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>we make eveything by hand with the best posoble ingredients.</h2>
                        <p>we pride ourselves on 
                        making real food from the best ingredients
                        we pride ourselves on 
                        making real food from the best ingredients</p>
                        <ul>
                            <li>Etiam sed dore ac diam volpaat . </li>
                            <li>Eriam sed dore ac gaam voolpat . </li>
                            <li>Piam sed dore ac diam volpaat . </li>
                        </ul>
                        <button>
                            <a href='#'>Learn more</a>
                        </button>
                    </div>
                    <div className='col-md-6'>
                        <img src={ingradients} alt='ingradiants'/>
                    </div>
                </div>
            </div>
        </section>

        {/* section 4 */}
        <section className='paralex'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <h2>when a man's is full it makes no 
                        <br/> diffrance whether he is rich or poor  </h2>
                            <p>when a man's is full it makes no 
                            whether he is rich or
                            <br/> 
                            diffrance whether he is rich or
                            diffrance whether he is rich or </p>
                            <a href='#'>watch our story</a>
                    </div>
                </div>
            </div>
        </section>

        {/* section 5 */}
        <section className='bloges'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12'>
                        <h2>Exploer Our Foods</h2>
                        <p>we pride ourselves on 
                        making real food from the best ingredients
                        we pride ourselves on 
                        making real food from the best ingredients
                        we pride ourselves on 
                        making real food from the best ingredients
                        we pride ourselves on 
                        making real food from the best ingredients</p>
                    </div>
                </div>
                <div className='row'>
                    {blogitems}
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;
