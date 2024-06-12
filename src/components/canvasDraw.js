import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line } from "react-konva"

function CanvasDraw({setProgress}) {

    /**
     * sets isDrawing is true when mouse is down
     * for creating individual lines when set isDrawing is true
     */
    const [lines, setLines] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);

    const [timer, setTimer] = useState(2);

    const intervalIdRef = useRef(null);

    useEffect(()=>{
        if (timer===0) {
            setProgress(2);
        }
    }, [timer, setProgress]);
    

    function startTimer() {
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
        clearInterval(intervalIdRef.current);
        setTimer(2);
        setIsDrawing(true);
        setLines([...lines, [e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]]);
    }

    function handleMouseUp() {
        setIsDrawing(false);
        startTimer();
    }

    function handleMouseMove(e) {
        if (isDrawing) {
            let lastLine = lines[lines.length-1];
            lastLine.push([e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]);
            setLines(lines.map((line, i) => (i === lines.length - 1 ? lastLine.flat() : line)));
        }
    }

    return(
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
    );
}

export default CanvasDraw;