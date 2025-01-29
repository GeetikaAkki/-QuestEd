import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CalendarButton = ({ children, onClick, style }) => (
  <button onClick={onClick} style={{ ...buttonStyle, ...style }}>
    {children}
  </button>
);

const DayButton = ({ day, isToday, onClick }) => (
  <button
    onClick={onClick}
    disabled={!day}
    style={{
      ...dayButtonStyle,
      ...(isToday ? todayButtonStyle : {}),
      ...(day ? activeDayStyle : inactiveDayStyle),
    }}
  >
    {day}
  </button>
);

const DailyQBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();
  const calendar = [];
  let day = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startDay) {
        week.push(null);
      } else if (day > daysInMonth) {
        week.push(null);
      } else {
        week.push(day);
        day++;
      }
    }
    calendar.push(week);
  }

  const handleDateClick = (day) => {
    if (day) {
      navigate('/dailyquiz');
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const isToday = (day) => {
    return day === new Date().getDate() && 
           currentDate.getMonth() === new Date().getMonth() && 
           currentDate.getFullYear() === new Date().getFullYear();
  };

  return (
    <div style={containerStyle}>
      <div style={calendarContainerStyle}>
        <div style={headerStyle}>
          <div style={headerContentStyle}>
            <CalendarButton 
              onClick={handlePrevMonth}
              style={navigationButtonStyle}
            >
              ←
            </CalendarButton>
            <div style={monthDisplayStyle}>
              <CalendarIcon style={iconStyle} />
              <span style={monthTextStyle}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
            </div>
            <CalendarButton 
              onClick={handleNextMonth}
              style={navigationButtonStyle}
            >
              →
            </CalendarButton>
          </div>
        </div>

        <div style={bodyStyle}>
          <div style={weekdayHeadersStyle}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} style={weekdayStyle}>
                {day}
              </div>
            ))}
          </div>

          <div style={gridStyle}>
            {calendar.map((week, weekIndex) => (
              week.map((day, dayIndex) => (
                <DayButton
                  key={`${weekIndex}-${dayIndex}`}
                  day={day}
                  isToday={isToday(day)}
                  onClick={() => handleDateClick(day)}
                />
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Style definitions
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f3f4f6'
};

const calendarContainerStyle = {
  width: '100%',
  maxWidth: '500px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

const headerStyle = {
  padding: '16px',
  borderBottom: '1px solid #e5e7eb'
};

const headerContentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const navigationButtonStyle = {
  padding: '8px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#f3f4f6'
  }
};

const monthDisplayStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const iconStyle = {
  width: '24px',
  height: '24px',
  color: '#4b5563'
};

const monthTextStyle = {
  fontSize: '18px',
  fontWeight: '600'
};

const bodyStyle = {
  padding: '16px'
};

const weekdayHeadersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px',
  marginBottom: '8px'
};

const weekdayStyle = {
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: '500',
  color: '#6b7280'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px'
};

const buttonStyle = {
  border: 'none',
  cursor: 'pointer'
};

const dayButtonStyle = {
  aspectRatio: '1',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: 'none',
  fontSize: '14px',
  transition: 'background-color 0.3s'
};

const activeDayStyle = {
  backgroundColor: '#f3f4f6',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#e5e7eb'
  }
};

const inactiveDayStyle = {
  backgroundColor: 'transparent',
  cursor: 'default'
};

const todayButtonStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  ':hover': {
    backgroundColor: '#2563eb'
  }
};

export default DailyQBoard;