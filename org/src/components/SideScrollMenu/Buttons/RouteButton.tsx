import targetImg from "@assets/Target.svg"

function RouteButton() {
    return (
        <button className=" flex justify-between items-center h-[40px] sm:w-[132px] rounded-[6px] px-[25px] bg-blue">
            <img src={targetImg} alt="" className=" h-[20px] w-[15px]"/>
            <div className="text-white text-[0px] sm:text-[14px]">Маршрут</div>
        </button>
    );
}
  
export default RouteButton;