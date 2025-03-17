import { WFComponent, onReady } from "@xatom/core";

export const initMultiStepForm = () => {
  console.log("Initializing multi-step form");
  
  // Get all steps
  const steps = document.querySelectorAll('[data-form="step"]');
  let currentStepIndex = 0;

  // Function to validate the current step
  const validateStep = (stepIndex: number): boolean => {
    const step = steps[stepIndex];
    const requiredFields = step.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    // Reset error states
    requiredFields.forEach(field => {
      const inputElement = field as HTMLInputElement | HTMLSelectElement;
      inputElement.classList.remove('error-field');
      
      // Find and remove any existing error message
      const existingErrorMsg = inputElement.parentElement?.nextElementSibling;
      if (existingErrorMsg && existingErrorMsg.classList.contains('field-error-message')) {
        existingErrorMsg.remove();
      }
    });
    
    // Check each required field
    requiredFields.forEach(field => {
      const inputElement = field as HTMLInputElement | HTMLSelectElement;
      if (!inputElement.value.trim()) {
        isValid = false;
        inputElement.classList.add('error-field');
        
        // Create error message element
        const errorMsg = document.createElement('div');
        errorMsg.className = 'field-error-message';
        errorMsg.textContent = 'Pflichtfeld';
        
        // Insert error message after the input's parent element
        const fieldWrapper = inputElement.closest('.multi-form13_field-wrapper');
        if (fieldWrapper) {
          // Insert after the input field or its container
          const inputContainer = inputElement.parentElement;
          if (inputContainer && inputContainer !== fieldWrapper) {
            inputContainer.after(errorMsg);
          } else {
            inputElement.after(errorMsg);
          }
        } else {
          // Fallback if field wrapper not found
          inputElement.after(errorMsg);
        }
      }
    });
    
    return isValid;
  };

  // Function to show a specific step
  const showStep = (stepIndex: number) => {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        (step as HTMLElement).style.display = 'block';
      } else {
        (step as HTMLElement).style.display = 'none';
      }
    });
    
    // Update progress indicators
    updateProgressIndicators(stepIndex);
  };

  // Function to update progress indicators
  const updateProgressIndicators = (currentStep: number) => {
    const progressIndicators = document.querySelectorAll('[data-form="custom-progress-indicator"]');
    
    progressIndicators.forEach((indicator, index) => {
      // Remove all classes first
      indicator.classList.remove('progress-current', 'completed');
      
      if (index < currentStep) {
        // Previous steps get completed class
        indicator.classList.add('completed');
      } else if (index === currentStep) {
        // Current step gets progress-current class
        indicator.classList.add('progress-current');
      }
      // Future steps have no special class
    });
  };

  // Handle radio button styling
  const setupRadioButtons = () => {
    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    // Add click event listeners to each radio button
    radioButtons.forEach(radio => {
      const radioInput = radio as HTMLInputElement;
      
      // Initial setup - check if radio is already selected
      if (radioInput.checked) {
        const label = radioInput.closest('.multi-form13_radio') as HTMLElement;
        if (label) {
          label.classList.add('is-active-inputactive');
          
          // Style the letter element if it exists
          const letterElement = label.querySelector('.multi-form13_radio-letter');
          if (letterElement) {
            letterElement.classList.add('active');
          }
          
          // Style the label text
          const labelText = label.querySelector('.multi-form13_radio-label');
          if (labelText) {
            labelText.classList.add('active');
          }
        }
      }
      
      // Add click event listener
      radioInput.addEventListener('click', () => {
        // Get all radio buttons in the same group
        const name = radioInput.getAttribute('name');
        const groupRadios = document.querySelectorAll(`input[name="${name}"]`);
        
        // Reset all radio buttons in the group
        groupRadios.forEach(groupRadio => {
          const groupLabel = groupRadio.closest('.multi-form13_radio') as HTMLElement;
          if (groupLabel) {
            groupLabel.classList.remove('is-active-inputactive');
            
            // Reset letter styling
            const letterElement = groupLabel.querySelector('.multi-form13_radio-letter');
            if (letterElement) {
              letterElement.classList.remove('active');
            }
            
            // Reset label text styling
            const labelText = groupLabel.querySelector('.multi-form13_radio-label');
            if (labelText) {
              labelText.classList.remove('active');
            }
          }
        });
        
        // Style the selected radio button
        const label = radioInput.closest('.multi-form13_radio') as HTMLElement;
        if (label) {
          label.classList.add('is-active-inputactive');
          
          // Style the letter element
          const letterElement = label.querySelector('.multi-form13_radio-letter');
          if (letterElement) {
            letterElement.classList.add('active');
          }
          
          // Style the label text
          const labelText = label.querySelector('.multi-form13_radio-label');
          if (labelText) {
            labelText.classList.add('active');
          }
        }
      });
    });
  };

  // Handle next button clicks
  const nextButtons = document.querySelectorAll('[data-form="next-btn"]');
  nextButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (validateStep(currentStepIndex)) {
        currentStepIndex++;
        if (currentStepIndex < steps.length) {
          showStep(currentStepIndex);
        }
      }
    });
  });

  // Handle back button clicks
  const backButtons = document.querySelectorAll('[data-form="back-btn"]');
  backButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (currentStepIndex > 0) {
        currentStepIndex--;
        showStep(currentStepIndex);
      }
    });
  });

  // Handle form submission
  const form = document.querySelector('#wf-form-Multi-form-13') as HTMLFormElement;
  if (form) {
    form.addEventListener('submit', (event) => {
      // Validate the final step before submission
      if (!validateStep(currentStepIndex)) {
        event.preventDefault();
        return;
      }
      
      // If all validations pass, allow the form to submit
      console.log('Form submitted');
    });
  } else {
    console.error("Form element not found");
  }

  // Initialize the form by showing the first step
  if (steps.length > 0) {
    showStep(0);
    // Setup radio buttons after showing the first step
    setupRadioButtons();
  } else {
    console.error("No form steps found");
  }

  // Add CSS for error styling and radio button styling
  const style = document.createElement('style');
  style.textContent = `
    .error-field {
      border-color: #ff3b30 !important;
    }
    .field-error-message {
      color: #ff3b30;
      font-size: 12px;
      margin-top: 4px;
      margin-bottom: 8px;
      display: block;
    }
    
    /* Radio button styling */
    .multi-form13_radio.is-active-inputactive {
      border-color: #000 !important;
      background-color: #fff !important;
    }
    
    .multi-form13_radio.is-active-inputactive .multi-form13_radio-label {
      color: #000 !important;
      font-weight: 500;
    }
    
    .multi-form13_radio-letter.active {
      background-color: #fff !important;
      color: #000 !important;
    }
    
    .multi-form13_radio-icon.w-radio-input.w--redirected-checked {
      background-color: #fff !important;
      border-color: #000 !important;
    }
  `;
  document.head.appendChild(style);
}; 