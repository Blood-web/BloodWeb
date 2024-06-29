import RPi.GPIO as GPIO 
import subprocess
from time import sleep
import signal
import logging


# Configure debug logging to save logs to file 'camera.log'
logging.basicConfig(filename='camera.log', level=logging.DEBUG)

# Function to initialize GPIO setup
def setup_gpio():
    GPIO.setmode(GPIO.BOARD)    
    GPIO.setup(7, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
    GPIO.add_event_detect(7, GPIO.RISING, callback=button_pressed, bouncetime=500)
    logging.debug("RPI-camera is live. GPIO-setup, Waiting for input..")    


# Function to capture a photo
def capture_photo():
    logging.info("Button pressed - Taking photo...")
    subprocess.run(["/var/www/html/captures/public/take-photo.sh"])  # Adjust the command as needed
    subprocess.run(["/var/www/html/captures/public/write_slider.sh"])
    #subprocess.Popen
    logging.info("Photo taken sucessfully..")

# Signal handler for stopping code execution on any key press
def signal_handler(sig, frame):
    logging.info("Stopping RPI-camera...")
    GPIO.cleanup()  # Cleanup GPIO1 pins
    exit(0)

def button_pressed(channel):
    global button_pressed
    if not button_pressed:   
        button_pressed = True 
        capture_photo()
        # Add a delay here to prevent multiple shots within a short time
        sleep(2)  # Adjust the delay as needed
        button_pressed=False


# Main function
def main():
    signal.signal(signal.SIGINT, signal_handler)  # Register signal handler for any key press
    setup_gpio()
    global button_pressed
    button_pressed = False

    try:
        while True:
            sleep(1)  # Adjust the delay as needed

    except KeyboardInterrupt:
        pass  # Continue if a KeyboardInterrupt occurs

    finally:
        GPIO.cleanup()  # Cleanup GPIO2 pins on exit

    input('enter\n')

# capture_photo()

if __name__ == "__main__":
    main()

