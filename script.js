function showTip(type){
 const tips={
 fps:"Start by identifying the limit: monitor your GPU/CPU utilization, temperatures and in-game settings. Lowering GPU-heavy settings helps when the GPU is near 100%; lowering CPU-heavy settings can help when the CPU is the limit.",
 stutter:"Check frametime and 1% lows. Test background apps, shader compilation, drivers, temperatures and RAM configuration. Change one variable at a time.",
 input:"Check monitor refresh rate, V-Sync, frame-cap behavior, fullscreen/windowed mode and mouse polling. Compare with a repeatable in-game test rather than relying on feel alone.",
 ping:"Ping is mainly network path and server distance. Use Ethernet where possible, avoid saturated uploads/downloads, and compare routes at the same time of day.",
 usage:"Find the process using CPU in Task Manager. If it is not required, close it or investigate it before changing Windows services. Do not randomly disable system processes."
 };
 document.getElementById("tip").textContent=tips[type];
}