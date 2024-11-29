import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles, SpriteAnimator} from "@react-three/drei";
import {useRef} from "react";

const RotatingCube = () => {
    const meshRef = useRef();

    useFrame(() => {
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry arcgs={[1,1,1]}/>
            <meshLambertMaterial color="#468585" emissive="#468585" />
            {/*<RotatingCube></RotatingCube>*/}
            <Sparkles count={10} size={10} scale={[1, 1, 1]} speed={0.002} noise={0.2} color='orange'></Sparkles>
        </mesh>
    )
}
const App = ()=>{
    return(
        <Canvas style={{
            height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <OrbitControls enableZoom enablePan enableRotate/>
            <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6}></directionalLight>
            <color attach="background" args={["#F0F0F0"]}></color>
            <RotatingCube></RotatingCube>
        </Canvas>
    )
}
export default App;