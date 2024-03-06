import Button from './button';
import "../index.css";
import HeaderImage from './HeaderImage';

export default function Header() {
    return (
        <div className="content-container">
            <div className="flex flex-col lg:flex-row justify-between items-start">
                <div className="text-header lg:order-1">
                    <div className="flex flex-col items-start"> 
                        <h1 className="text-4xl lg:text-7xl sm:text-6xl font-extrabold mb-4 text-white font-Metropolis-ExtraBold responsive-title">
                            Robôs fazendo <br /> suas tarefas!
                        </h1>
                        <span className="text-base lg:text-lg mb-4 text-white max-w-xl leading-5 font-Metropolis-Regular"> 
                            A Solo garante a melhor experiência de automações para a sua empresa.
                        </span>
                        <Button />
                    </div>
                </div>
                <div className="lg:order-2">
                    <HeaderImage />
                </div>
            </div>
        </div>
    );
}
