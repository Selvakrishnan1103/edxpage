export default function Main(){
    return(
        <main>
            <div
                className="bg-cover h-[500px] bg-center  "
                style={{ backgroundImage : "url('https://www.edx.org/_next/image?url=https%3A%2F%2Fimages.cdn.edx.org%2Fattachment-18922homepage-hero-desktop.jpg&w=640&q=75')"}}
            >
                <div className="lg:w-[600px] flex flex-col justify-center item-center">
                    <p className="text-white text-[60px] text-italic font-bold">Learn anywhere with edX</p>
                    <p className="text-white text-[30px]">earn on-the-go or right at home with edX’s self-paced courses. Get started today!</p>
                    
                </div>
            </div>
        </main>
    )
}