import { useState } from "react";

import logo from '../images/logo.png';
import ToolGrid from "../components/ToolGrid";
import ITool from "../interfaces/ITool";
import ToolForm from "../components/ToolForm";
import ToolSearch from "../components/ToolSearch";

function Dashboard() {

    // Hooks.
    const [tools, setTools] = useState<ITool[]>([]);

    // Handlers & functions.

    return (
        <div className="container-fluid">
            <div id="side-bar">
                <img id="logo" src={logo} alt="Vuttr" title="Vuttr" />
            </div>
            <div id="main-container">
                {
                    <>
                        <ToolSearch />
                        <ToolGrid />
                    </>
                }
                <ToolForm setTools={setTools} />
            </div>
        </div >
    );
}

export default Dashboard;
