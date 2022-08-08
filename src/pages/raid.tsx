import type { NextPage } from "next";
import Link from "next/link";

const waymarks = ["1", "2", "3", "4"];

const LeftComponentPanel = () => {
    return <div>some content</div>
}

const CanvasMain = () => {
    return <div />
}

const RightComponentPanel = () => {
    return <div />
}

const Raid: NextPage = () => {
    return (
        <div className="max-w-7xl m-auto h-screen base-100 p-4">
            <Link href="/">Home</Link>
            <div className="grid grid-cols-8 py-4 gap-2 h-4/6">
                <div className="col-span-2 card bg-neutral shadow-xl p-4">
                    <LeftComponentPanel />
                </div>
                <div className="col-span-4 card bg-neutral shadow-xl p-4">
                    <CanvasMain />
                </div>
                <div className="col-span-2 card bg-neutral shadow-xl p-4">
                    <RightComponentPanel />
                    <h1>First Post</h1>
                    <h1>Second Post</h1>
                    {waymarks.filter(x => Number(x) > 1).map(x => <p>{Number(x) * 2 + 2}</p>)}
                </div>

            </div>

        </div>
    );
}

export default Raid;