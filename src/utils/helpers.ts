export const getStatusColor = (status: string): string => {
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

export const getTypeData = (type: string): {color: string | null, icon: string | null, name: string | null} => {
  switch (type.toLowerCase()) {
    case 'cli':
      return {
        color: 'black',
        icon: 'terminal',
        name: 'CLI',
      };

    case 'website':
      return {
        color: 'blue',
        icon: 'html5',
        name: 'Website',
      };

    case 'webapp':
      return {
        color: 'olive',
        icon: 'code',
        name: 'Wep App',
      };

    case 'rest_api':
      return { color: 'orange', icon: 'cogs', name: 'REST Api' };

    case 'mobile_app':
      return { color: 'purple', icon: 'mobile', name: 'Mobile App' };

    default:
      return { color: null, icon: null, name: null };
  }
};
