import React from "react";

export default function SplineViewer() {
    return (
        <div className="spline-container">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.455/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/OQQWCkdJFBPH0XT0/scene.splinecode"></spline-viewer>
        </div>
    );
}
