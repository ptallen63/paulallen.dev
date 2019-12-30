export const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return 'green';

    case 'Development':
      return 'blue';

    case 'Archived':
      return 'yellow';

    default:
      return 'red';
  }
};

export const getTypeData = (type) => {
  switch (type.toLowerCase()) {
    case 'cli':
      return {
        color: 'black',
        icon: 'terminal',
      };

    case 'website':
      return {
        color: 'blue',
        icon: 'html5',
      };

    case 'webapp':
      return {
        color: 'olive',
        icon: 'code',
      };

    case 'rest api':
      return { color: 'orange', icon: 'cogs' };

    case 'mobileapp':
      return { color: 'purple', icon: 'mobile' };

    default:
      return false;
  }
};
