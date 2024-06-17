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
    /**Touch handler functions for mobile*/
    function handleTouchStart(e) {
        e.currentTarget.preventDefault();
        if (timer !== 0) {
            clearInterval(intervalIdRef.current);
            setIsDrawing(true);
            setLines([...lines, [e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]]);
        }
    }

    function handleTouchEnd() {
        if (isDrawing) {
            setIsDrawing(false);
            startTimer(2);
        }
    }

    function handleTouchMove(e) {
        e.currentTarget.preventDefault();
        if (isDrawing) {
            let lastLine = lines[lines.length-1];
            lastLine.push([e.currentTarget.getStage().getPointerPosition().x, e.currentTarget.getStage().getPointerPosition().y]);
            setLines(lines.map((line, i) => (i === lines.length - 1 ? lastLine.flat() : line)));
        }
    }

    /**Mouse handler functions */
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

    const parentRef = useRef(null);
    const stageRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            const parentHeight = parentRef.current.clientHeight;
            stageRef.current.width(2.2*parentHeight);
            stageRef.current.height(parentHeight);
        }
    })

    return(
        <div 
            className="flex justify-center h-full w-full" 
            onTouchEnd={handleTouchEnd} 
            onMouseUp={handleMouseUp}>
            <div ref={parentRef} className="absolute h-[35%] portrait:h-[18%] top-[58%] portrait:top-[53.5%] select-none">
                <Stage 
                    ref={stageRef} 
                    onTouchStart={handleTouchStart} 
                    onTouchMove={handleTouchMove} 
                    onTouchEnd={handleTouchEnd} 
                    onMouseDown={handleMouseDown} 
                    onMouseUp={handleMouseUp} 
                    onMouseMove={handleMouseMove}>

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
            {fadeWhite && <div className="-z-10 absolute inset-0 bg-white opacity-0 fadeInAnimation"></div>}
        </div>
    );
}

export default CanvasDraw;