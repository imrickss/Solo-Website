import '../index.css'
import RobotImage from './RobotImage';

export default function OQueFazemos() {
 return (
  <div className="flex justify-between items-center content-container text-white">
  <div>
      <h1 className="text-6xl font-Metropolis-Bold">O que fazemos?</h1>
      <p className="text-2xl lg:text-2xl font-Metropolis-Regular max-w-615">Mapeamos e validamos processos manuais para transformar em <span className="font-Metropolis-ExtraBold">RPA (Robotic Process Automation)</span>.
        Em seguida iniciamos o desenvolvimento dos “<span className="font-Metropolis-ExtraBold">robôs</span>” capazes de entender e executar com maestria as <span className="font-Metropolis-ExtraBold">regras de negócio</span>.</p>
  </div>
  <div>
      <RobotImage />
  </div>
  </div>
 )
}  