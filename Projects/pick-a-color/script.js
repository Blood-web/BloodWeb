class ColorBox {
    constructor(numColors, shiftLocked) {
        this.numColors = numColors;
        this.shiftLocked = shiftLocked;
        this.mainBox = document.getElementById('mainBox');
        this.createRectangles(this.numColors);

        document.getElementById('colorCount').addEventListener('input', (e) => {
            this.updateColors(parseInt(e.target.value));
        });

        document.getElementById('shiftLocked').addEventListener('change', (e) => {
            this.shiftLocked = e.target.checked;
        });

        document.getElementById('refreshButton').addEventListener('click', (e) => {
            e.preventDefault();
            this.refreshColors();
        });

        document.getElementById('colorCount').addEventListener('input', (e) => {
            this.updateColors(parseInt(e.target.value));
        });

        document.getElementById('shiftLocked').addEventListener('change', (e) => {
            this.shiftLocked = e.target.checked;
        });
        
        document.getElementById('textColor').addEventListener('input', (e) => {
            this.updateTextColor(e.target.value);
        });
        
        document.getElementById('lockAllButton').addEventListener('click', () => {
            this.lockAll();
        });
    
        document.getElementById('bgColor').addEventListener('input', (e) => {
            document.getElementById('unlockAllButton').addEventListener('click', () => {
                this.unlockAll();
            });
            this.updateBackgroundColor(e.target.value);
        });

        document.getElementById('saveConfigButton').addEventListener('click', () => {
            this.saveConfiguration();
        });

        document.getElementById('loadConfigButton').addEventListener('click', () => {
            this.loadConfiguration();
        });

        document.getElementById('resetDefaultsButton').addEventListener('click', () => {
            this.resetToDefaults();
        });
    }

    randomHex(length) {
        const chars = '0123456789ABCDEF';
        let hex = '#';
        for (let i = 0; i < length; i++) {
            hex += chars[Math.floor(Math.random() * 16)];
        }
        return hex;
    }

    lock_icon(ele){
        ele.classList.toggle('locked');
        if (ele.classList.contains('locked')) {
            const lockIcon = document.createElement('span');
            lockIcon.className = 'lock-icon';
            lockIcon.innerHTML = '&#128274;'; // Lock icon HTML entity
            ele.appendChild(lockIcon);
        } else {
            const lockIcon = ele.querySelector('.lock-icon');
            if (lockIcon) {
                lockIcon.remove();
            }
        }
    }

    createRectangles(num) {
        this.mainBox.innerHTML = ''; // Clear previous rectangles
        for (let i = 0; i < num; i++) {
            const color = this.randomHex(6);
            const rect = document.createElement('div');
            rect.className = 'rectangle';
            rect.style.backgroundColor = color;
            rect.innerText = color;
            rect.addEventListener('click', () => {
               this.lock_icon(rect);
            });
            this.mainBox.appendChild(rect);
        }
    }

    refreshColors() {
        const rectangles = Array.from(document.querySelectorAll('.rectangle'));
        const lockedRects = rectangles.filter(rect => rect.classList.contains('locked'));
        const unlockedRects = rectangles.filter(rect => !rect.classList.contains('locked'));

        if (this.shiftLocked) {
        // Move locked rectangles to the start
            this.mainBox.innerHTML = '';
            lockedRects.forEach(rect => this.mainBox.appendChild(rect));
            unlockedRects.forEach(rect => this.mainBox.appendChild(rect));
        }

        // Refresh colors of unlocked rectangles
        unlockedRects.forEach(rect => {
            const newColor = this.randomHex(6);
            rect.style.backgroundColor = newColor;
            rect.innerText = newColor;
        });
    }

    updateColors(newCount) {
        if (newCount > 0) {
            this.numColors = newCount;
            this.createRectangles(this.numColors);
        }
    }

    // Add these methods to the ColorBox class
    toggleBorders(showBorders) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.border = showBorders ? '1px solid #000' : 'none';
        });
    }

    updateFontSize(size) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.fontSize = `${size}px`;
        });
    }

    updateRectSize(size) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.width = `${size}px`;
            rect.style.height = `${size}px`;
        });
    }

    updateTextColor(color) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.color = color;
        });
    }

    lockAll() {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => rect.classList.add('locked'));
    }

    unlockAll() {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => rect.classList.remove('locked'));
    }
    updateBackgroundColor(color) {
document.getElementById('mainBox').style.backgroundColor = color;
}

    toggleHoverEffects(enable) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.transition = enable ? 'background-color 0.5s' : 'none';
        });
    }

    updateAnimationSpeed(speed) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.transitionDuration = `${speed}ms`;
        });
    }

    updateTextAlignment(alignment) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rect => {
            rect.style.textAlign = alignment;
        });
    }

    saveConfiguration() {
        const config = {
            colorCount: document.getElementById('colorCount').value,
            shiftLocked: document.getElementById('shiftLocked').checked,
            textColor: document.getElementById('textColor').value,
            bgColor: document.getElementById('bgColor').value,
            textAlign: document.getElementById('textAlign').value,
        };
        localStorage.setItem('colorBoxConfig', JSON.stringify(config));
    }

    loadConfiguration() {
        const config = JSON.parse(localStorage.getItem('colorBoxConfig'));
        if (config) {
            document.getElementById('colorCount').value = config.colorCount;
            document.getElementById('shiftLocked').checked = config.shiftLocked;
            document.getElementById('textColor').value = config.textColor;
            document.getElementById('bgColor').value = config.bgColor;
            document.getElementById('textAlign').value = config.textAlign;
            this.applySettings();
        } else {
            console.warn('No saved configuration found');
        }
    }

    resetToDefaults() {
        document.getElementById('colorCount').value = 10;
        document.getElementById('shiftLocked').checked = true;
        document.getElementById('textColor').value = '#000000';
        document.getElementById('bgColor').value = '#ffffff';
        document.getElementById('textAlign').value = 'center';
        this.applySettings();
    }

    // Add this method to apply settings
    applySettings() {
        this.updateTextColor(document.getElementById('textColor').value);
        this.updateBackgroundColor(document.getElementById('bgColor').value);
        this.updateTextAlignment(document.getElementById('textAlign').value);
    }
}

document.getElementById('toggleAdvancedSettings').addEventListener('click', () => {
const advancedSettings = document.querySelector('.advanced-settings');
const button = document.getElementById('toggleAdvancedSettings');
if (advancedSettings.style.display === 'none') {
    advancedSettings.style.display = 'block';
    button.textContent = 'Hide Advanced Settings';
} else {
    advancedSettings.style.display = 'none';
    button.textContent = 'Show Advanced Settings';
}
});


document.addEventListener('DOMContentLoaded', function() {
    const colorBox = new ColorBox(5, true); // Default to 10 colors initially with shifting locked rectangles enabled
    colorBox.loadConfiguration();
});
