//taken from module 14, activity 20 Stu_middleware
//removed the format_time from the function
module.exports = {
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
  };
  