import { useEffect, useState } from "react";
const ViewPort = () => {
    const [size, setSize] = useState({
        width: window.screen.width, height:
            window.screen.height
    });
    useEffect(() => {
        const updateWindow = () => {
            let { innerWidth, innerHeight } = window;
            setSize({ width: innerWidth, height: innerHeight });
        }
        window.addEventListener('resize', updateWindow);
        return () => {
            window.removeEventListener('resize', updateWindow);
            }
    });
    return (
        <div>
            <h1 className="viewports">
                Your ViewPort size is:
            </h1>
            <div>
                {size.width} px x {size.height} px
            </div>
            <hr />
        </div>
    );
}
export default ViewPort;
