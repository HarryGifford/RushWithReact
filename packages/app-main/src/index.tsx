import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const LoadingComponent = <div>Loading...</div>;

const render = () => {
    const App = lazy(() => import(/* webpackChunkName: "App" */ "./App"));
    ReactDOM.render(
        <Suspense fallback={LoadingComponent}>
            <App />
        </Suspense>,
        document.getElementById("root")
    );
};

render();

if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
        module.hot.accept("./App", render);
        module.hot.accept("./index");
    }
}
