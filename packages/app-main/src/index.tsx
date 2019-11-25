import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const LoadingComponent = <div>Loading...</div>;

const render = () => {
    const App = lazy(() =>
        import(/* webpackChunkName: "app-component" */ "app-component")
    );
    ReactDOM.render(
        <Suspense fallback={LoadingComponent}>
            <App />
        </Suspense>,
        document.getElementById("root")
    );
};

render();
