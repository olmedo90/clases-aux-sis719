import { useKeyBoard } from "../hooks/useKeyBoard";
import { ItemKeyComponent } from "./ItemKeyComponent";
export const KeyBoardComponent = () => {
    const [keyState, setKeyState] = useKeyBoard();
    const handlerClick = (key) => {
        const newState = keyState.map((item) => {
            if (key === item.key) {
                item.state = true;
            }
            return item;
        });
        setKeyState(newState);
    };
    return (
        <div className="flex-container">
            {keyState.map(({ key, state }) => (
                <ItemKeyComponent
                    key={key}
                    myKey={key}
                    state={state}
                    handlerClick={handlerClick}
                />
            ))}
        </div>
    );
};