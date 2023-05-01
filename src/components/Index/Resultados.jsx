import './Resultados.css'
import CountUp from 'react-countup';

export default function Resultados() {
    return (
        <div className='conteiner-result'>
            <div className='resultado'>
                <div className="resultad-card">
                    <i className="icon-s las la-comment"></i>
                    <CountUp end={100} start={10} delay='0.2' prefix="+"></CountUp>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="resultad-card">
                    <i className="icon-s las la-briefcase"></i>
                    <CountUp end={200} start={20} delay='0.2' prefix="+"></CountUp>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="resultad-card">
                    <i className="icon-s las la-smile"></i>
                    <CountUp end={400} start={40} delay='0.2' prefix="+"></CountUp>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </div>
    )
}
