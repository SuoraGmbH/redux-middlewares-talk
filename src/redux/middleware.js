const lowercaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getActionType = (entityAction) => {
  return `${entityAction.entityType}/${uppercaseFirstLetter(
    entityAction.action
  )}`;
};

export const middleware = ({ baseUrl }) => {
  const getFetchAllPayload = async (entityAction) => {
    const response = await fetch(
      `${baseUrl}/${lowercaseFirstLetter(entityAction.entityType)}s`
    );

    return response.json();
  };

  const getAddPayload = async (entityAction) => {
    const response = await fetch(
      `${baseUrl}/${lowercaseFirstLetter(entityAction.entityType)}s`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entityAction.entity),
      }
    );

    return response.json();
  };

  const getUpdatePayload = async (entityAction) => {
    const response = await fetch(
      `${baseUrl}/${lowercaseFirstLetter(entityAction.entityType)}s/${
        entityAction.entity.id
      }`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entityAction.entity),
      }
    );

    return response.json();
  };

  return (storeAPI) => (next) => async (action) => {
    if (!action.entityAction) {
      return next(action);
    }

    const { entityAction } = action;

    let payload;

    switch (entityAction.action) {
      case "fetch":
        payload = await getFetchAllPayload(entityAction);
        break;
      case "update":
        payload = await getUpdatePayload(entityAction);
        break;
      case "add":
        payload = await getAddPayload(entityAction);
        break;
    }

    return next({
      type: getActionType(entityAction),
      payload,
    });
  };
};
