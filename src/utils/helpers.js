export const getStatusColor = status => {
  switch (status) {
    case "Active":
      return "green";

    case "Development":
      return "blue";

    case "Archived":
      return "yellow";

    default:
      return "red";
  }
};

export const getTypeData = type => {
  switch (type) {
    case "CLI":
      return {
        color: "black",
        icon: "terminal"
      };

    case "Website":
      return {
        color: "blue",
        icon: "html5"
      };

    case "Webapp":
      return {
        color: "olive",
        icon: "code"
      };

    case "REST Api":
      return { color: "orange", icon: "cogs" };

    case "Mobile App":
      return { color: "purple", icon: "mobile" };

    default:
      return false;
  }
};