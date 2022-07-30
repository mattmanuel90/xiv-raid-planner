import type { NextPage } from "next";
import Link from "next/link";

const waymarks = ["1", "2", "3", "4"];

const ComponentPanel = () => {
    return <div />
}

const CanvasMain = () => {

    return <div />
}

const Raid: NextPage = () => {
    return (
        <div className="max-width-7xl m-auto    ">
            <Link href="/">Home</Link>
            <ComponentPanel />
            <CanvasMain />
            <h1>First Post</h1>
        </div>
    );
}

export default Raid;