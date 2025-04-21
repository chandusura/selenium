from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os

# Load the local HTML file
file_path = 'file://' + os.path.abspath("Addition_calculator.html")

# Initialize the Chrome driver
driver = webdriver.Chrome()

try:
    # Open the calculator page
    driver.get(file_path)

    # Enter numbers
    driver.find_element(By.ID, "num1").send_keys("10")
    driver.find_element(By.ID, "num2").send_keys("25")

    # Click the Add button
    driver.find_element(By.TAG_NAME, "button").click()

    # Wait a moment to let result update
    time.sleep(1)

    # Get the result text
    result = driver.find_element(By.ID, "result").text
    print("Displayed Result:", result)

    # Optional: Check if the result is correct
    assert result == "Result: 35", "Test Failed!"
    print("Test Passed ")

finally:
    time.sleep(5)
    driver.quit()
