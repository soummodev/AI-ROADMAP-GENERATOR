export function Loading({ message = "Loading..." }) {

    return (

      <div className="loading-state">
        <div className="spinner" />
        <p>{message}</p>
      </div>
    );
  }


  export function ErrorMessage({ message, onRetry }) {

    return (
      <div className="error-box">
        <span className="error-icon">⚠️</span>
        <p>{message}</p>
        {onRetry && (
          <button className="btn btn-outline" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    )
  }
  








