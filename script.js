document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        header.classList.toggle('active');

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

    // Custom dropdown
    document.querySelectorAll('.custom-select').forEach(customSelect => {
      const selectedOption = customSelect.querySelector('.selected-option');
      const optionsContainer = customSelect.querySelector('.options-container');
      const options = customSelect.querySelectorAll('.option');
      const selectedText = selectedOption.querySelector('.selected-text');

      // Toggle the options container on click
      selectedOption.addEventListener('click', () => {
        const isVisible = optionsContainer.style.display === 'block';
        document.querySelectorAll('.options-container').forEach(container => {
          container.style.display = 'none'; // Close other dropdowns
        });
        optionsContainer.style.display = isVisible ? 'none' : 'block';
        customSelect.classList.toggle('active', !isVisible);
      });

      // Add click event for each option
      options.forEach(option => {
        option.addEventListener('click', () => {
          selectedText.innerText = option.innerText;
          options.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          optionsContainer.style.display = 'none';
          customSelect.classList.remove('active');

          // Update current range & prices
          currentRange = option.innerText.trim();
          updatePrices();
        });
      });

      // Close the dropdown if clicked outside
      document.addEventListener('click', function (event) {
        if (!event.target.closest('.custom-select')) {
          optionsContainer.style.display = 'none';
          customSelect.classList.remove('active');
        }
      });
    });

    // Pricing table data
    const pricingData = {
      weekly: {
        "1 – 9": { essential: 6, peo: 17, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "10 – 24": { essential: 6, peo: 16, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "25 – 49": { essential: 5, peo: 15, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "50 – 99": { essential: 5, peo: 14, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "100 – 149": { essential: 4, peo: 13, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "150 – 199": { essential: 4, peo: 12, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
        "200+": { essential: null, peo: null, WebBasedclock: { left: 0.25, right: null }, VirtualClock: { left: 38, right: null }, Hardwareclock: { left: 0.50, right: null }, geofencing: { left: 25, right: 25 }, PerformanceM: { left: 0.75, right: null }, EngagementM: { left: 0.75, right: null }, CompensationM: { left: 0.40, right: null }, HREssential: { left: 2.50, right: null }, HRExpert: { left: 7.50, right: 7.50 }, HRElite: { left: 12.50, right: 12.50 }, Scheduling: { left: 0.60, right: 0.60 }, WorkforceScheduling: { left: 0.40, right: 0.40 }, OccurrenceTracking: { left: 0.15, right: 0.15 }, LMS: { left: 0.60, right: 0.60 }, LMSC: { left: 1.00, right: 1.00 }, VirtualAssistant: { left: 0.40, right: 0.40 }, ELC: { left: 38, right: 38 }, BELC: { left: 75, right: 75 }, PeopleAnalytics: { left: 0.50, right: 0.50 } },
      },
      "bi-weekly": {
        "1 – 9": { essential: 12, peo: 35, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "10 – 24": { essential: 11, peo: 33, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "25 – 49": { essential: 11, peo: 31, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "50 – 99": { essential: 10, peo: 29, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "100 – 149": { essential: 9, peo: 27, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "150 – 199": { essential: 8, peo: 25, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "200+": { essential: null, peo: null, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
      },
      "semi-monthly": {
        "1 – 9": { essential: 12, peo: 35, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "10 – 24": { essential: 11, peo: 33, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "25 – 49": { essential: 22, peo: 63, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "50 – 99": { essential: 21, peo: 59, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "100 – 149": { essential: 9, peo: 27, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "150 – 199": { essential: 8, peo: 25, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "200+": { essential: null, peo: null, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } }
      },
      monthly: {
        "1 – 9": { essential: 24, peo: 70, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "10 – 24": { essential: 23, peo: 66, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "25 – 49": { essential: 22, peo: 63, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "50 – 99": { essential: 21, peo: 59, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "100 – 149": { essential: 19, peo: 55, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "150 – 199": { essential: 18, peo: 51, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
        "200+": { essential: null, peo: null, WebBasedclock: { left: 1.00, right: null }, VirtualClock: { left: 150, right: null }, Hardwareclock: { left: 2.00, right: null }, geofencing: { left: 100, right: 100 }, PerformanceM: { left: 3.00, right: null }, EngagementM: { left: 3.00, right: null }, CompensationM: { left: 1.50, right: null }, HREssential: { left: 10.00, right: null }, HRExpert: { left: 30.00, right: 30.00 }, HRElite: { left: 50.00, right: 50.00 }, Scheduling: { left: 2.50, right: 2.50 }, WorkforceScheduling: { left: 1.50, right: 1.50 }, OccurrenceTracking: { left: 0.50, right: 0.50 }, LMS: { left: 2.50, right: 2.50 }, LMSC: { left: 4.00, right: 4.00 }, VirtualAssistant: { left: 1.50, right: 1.50 }, ELC: { left: 150, right: 150 }, BELC: { left: 300, right: 300 }, PeopleAnalytics: { left: 2.00, right: 2.00 } },
      },
      quarterly: {
        "1 – 9": { essential: 72, peo: 210, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "10 – 24": { essential: 69, peo: 199, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "25 – 49": { essential: 66, peo: 189, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "50 – 99": { essential: 63, peo: 179, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "100 – 149": { essential: 57, peo: 165, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "150 – 199": { essential: 54, peo: 155, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
        "200+": { essential: null, peo: null, WebBasedclock: { left: 0.50, right: null }, VirtualClock: { left: 75, right: null }, Hardwareclock: { left: 1.00, right: null }, geofencing: { left: 50, right: 50 }, PerformanceM: { left: 1.50, right: null }, EngagementM: { left: 1.50, right: null }, CompensationM: { left: 0.75, right: null }, HREssential: { left: 5.00, right: null }, HRExpert: { left: 15.00, right: 15.00 }, HRElite: { left: 25.00, right: 25.00 }, Scheduling: { left: 1.25, right: 1.25 }, WorkforceScheduling: { left: 0.75, right: 0.75 }, OccurrenceTracking: { left: 0.25, right: 0.25 }, LMS: { left: 1.25, right: 1.25 }, LMSC: { left: 2.00, right: 2.00 }, VirtualAssistant: { left: 0.75, right: 0.75 }, ELC: { left: 75, right: 75 }, BELC: { left: 150, right: 150 }, PeopleAnalytics: { left: 1.00, right: 1.00 } },
      }
    };

    // Elements for main plans
    const essentialDollarEl = document.querySelector(".content-head-grid-2 .content-pricing-flex span:first-child");
    const essentialPriceEl = document.querySelector(".content-head-grid-2 .content-pricing-flex span:nth-child(2)");
    const essentialSuffixEl = document.querySelector(".content-head-grid-2 .content-pricing-flex span:last-child");

    const peoDollarEl = document.querySelector(".content-head-grid-3 .content-pricing-flex span:first-child");
    const peoPriceEl = document.querySelector(".content-head-grid-3 .content-pricing-flex span:nth-child(2)");
    const peoSuffixEl = document.querySelector(".content-head-grid-3 .content-pricing-flex span:last-child");

    // Plan heading element
    const planHeadingEl = document.querySelector(".content-head-grid-1 h3");

    // State
    let currentPlan = document.querySelector(".tabs-structure.active")?.getAttribute("data-plan") || "weekly";
    let currentRange = document.querySelector(".custom-select .selected-text").innerText.trim();

    // Function to update heading
    function capitalizeWords(str) {
      return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');
    }

    function updatePlanHeading() {
      planHeadingEl.textContent = capitalizeWords(currentPlan);
    }

    // Function to update prices dynamically
    function updatePrices() {
      const priceInfo = pricingData[currentPlan][currentRange];
      if (!priceInfo) return;

      // Essential Plan
      if (priceInfo.essential == null) {
        essentialDollarEl.style.display = "none";
        essentialPriceEl.textContent = "Custom Quote";
        essentialSuffixEl.style.display = "none";
      } else {
        essentialDollarEl.style.display = "";
        essentialSuffixEl.style.display = "";
        essentialPriceEl.textContent = priceInfo.essential;
      }

      // PEO Plan
      if (priceInfo.peo == null) {
        peoDollarEl.style.display = "none";
        peoPriceEl.textContent = "Custom Quote";
        peoSuffixEl.style.display = "none";
      } else {
        peoDollarEl.style.display = "";
        peoSuffixEl.style.display = "";
        peoPriceEl.textContent = priceInfo.peo;
      }

      // Update other blocks
      document.querySelectorAll("[data-price-key]").forEach((block) => {
        const key = block.getAttribute("data-price-key");
        const blockPrices = priceInfo[key];
        const spans = block.querySelectorAll("span[data-price-pos]");

        if (!blockPrices) {
          spans.forEach((span) => (span.textContent = ""));
          return;
        }

        spans.forEach((span) => {
          const pos = span.getAttribute("data-price-pos");
          if (blockPrices[pos] !== undefined) {
            const value = blockPrices[pos];
            if (typeof value === "number") {
              if (value < 1 || !Number.isInteger(value)) {
                span.textContent = value.toFixed(2);
              } else {
                span.textContent = value;
              }
            } else {
              span.textContent = value ?? "";
            }
          }
        });
      });
    }

    // Tab click listener (works for any number of tabs)
    document.querySelectorAll(".tabs-structure").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tabs-structure").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentPlan = tab.getAttribute("data-plan");
        updatePrices();
        updatePlanHeading();
      });
    });

    // Initial render
    updatePrices();
    updatePlanHeading();
