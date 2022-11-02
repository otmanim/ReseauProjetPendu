export default function PlayerBanner({profilPicture, userName}) {
    return (
        <div className="flex bg-white w-[90%] ml-[5%] rounded-full mt-[5%]">
            <img className="w-[15%]" src={profilPicture} />
            <div>
                <h1 className="font-junegull text-lg ">{userName}</h1>
            </div>
        </div>
    )
}