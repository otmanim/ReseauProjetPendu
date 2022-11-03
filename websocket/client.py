import websockets
import asyncio

# The main function that will handle connection and communication 
# with the server
async def listen():
    url = "ws://127.0.0.1:7890"
    # Connect to the server
    async with websockets.connect(url) as ws:
        # Send a greeting message
        #await ws.send("Hello Server!")
        # Stay alive forever, listening to incoming msgs
        while True:
            msg = input('-> ')
            #msg = await ws.recv()
            await ws.send(msg)
            #print(msg)

# Start the connection
asyncio.get_event_loop().run_until_complete(listen())