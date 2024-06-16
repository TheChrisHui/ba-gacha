import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line } from "react-konva"

function CanvasDraw({setProgress}) {

    /**
     * sets isDrawing is true when mouse is down
     * for creating individual lines when set isDrawing is true
     */
    const [lines, setLines] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [fadeWhite, setFadeWhite] = useState(false);

    const [timer, setTimer] = useState(2);

    const intervalIdRef = useRef(null);

    useEffect(()=>{
        if (timer===0) {
            setFadeWhite(true);
            setTimeout(() => setProgress(2),800);
        }
    }, [timer, setProgress]);
    

    function startTimer(initialTimer) {
        setTimer(initialTimer);
        intervalIdRef.current = setInterval(()=>{
            setTimer((prevTimer)=>{
                if (prevTimer===1) {
                    clearInterval(intervalIdRef.current);
                }
                return(
                    prevTimer-1
                );
            });
        },500);
    }

    function handleMouseDown(e) {
        if (timer !== 0) {
            clearInterval(intervalIdRef.current);
            setIsDrawing(true);
            setLines([...lines, [e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]]);
        }
    }

    function handleMouseUp() {
        if (isDrawing) {
            setIsDrawing(false);
            startTimer(2);
        }
    }

    function handleMouseMove(e) {
        if (isDrawing) {
            let lastLine = lines[lines.length-1];
            lastLine.push([e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]);
            setLines(lines.map((line, i) => (i === lines.length - 1 ? lastLine.flat() : line)));
        }
    }
/**
 * function handleMouseLeave() {
        if (isDrawing) {
            console.log("meaningful leave");
            setIsDrawing(false);
            startTimer(10);   
        }
    }
 */
    

    return(
        <div className="absolute h-full w-full" onMouseUp={handleMouseUp}>
            <div className="absolute h-[300px] w-[650px] left-[635px] top-[525px]">
                <Stage height={300} width={650} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                    <Layer>
                        {lines.map((line, i)=> {
                            return(
                                <Line
                                key={i}
                                points={line}
                                stroke="#94f7f9"
                                strokeWidth={4}
                                tension={0.5}
                                lineCap="round"
                            />
                            );}
                        )}
                    </Layer>
                </Stage>
            </div>
            {fadeWhite && <div className="-z-10 absolute top-0 left-0 h-full w-full bg-white opacity-0 fadeInAnimation"></div>}
        </div>
    );
}

export default CanvasDraw;