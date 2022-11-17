export default function Status({type, leader}){
    return(
        <div>
            {type === 'available' && 
                <div className="bg-blue-100 text-center w-20 rounded-full">
                    <h1 className="font-bold text-sm text-blue-600">In Menu</h1>
                </div>
            }
            {type === 'ingame' && 
                <div className="bg-red-100 text-center w-20 rounded-full">
                    <h1 className="font-bold text-sm text-red-600">In Game</h1>
                </div>
            }
            {type === 'inGroupe' && 
                <div className="bg-green-100 text-center w-40 rounded-full">
                    <h1 className="font-bold text-sm text-green-600">In {leader}'s groupe</h1>
                </div>
            }
            {type === 'leader' && 
                <div className="bg-orange-100 text-center w-40 rounded-full">
                    <h1 className="font-bold text-sm text-orange-600">Group's Leader</h1>
                </div>
            }
        </div>
    )
}