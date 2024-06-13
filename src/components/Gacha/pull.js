function Pull({pullList, onClick}) {

    console.log("Pulllist: ", pullList);

    return(
        <div className="bg-blue-101">
            {pullList.map((characterName)=>{
                console.log("Character Name: ", characterName);
                return(
                    <div>
                        <img src={require(`../../media/baIcons/${characterName}_Icon.png`)} alt="characterIcon"/>
                        {characterName}
                    </div>
                );
            })}
            <button className="border border-black" onClick={() => onClick(0)}>
                To Menu
            </button>
        </div>
    );
}

export default Pull;