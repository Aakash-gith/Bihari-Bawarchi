import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    // Optional: reload page to ensure clean state
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6 font-sans text-gray-900">
          <div className="max-w-md w-full glass-card bg-white/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/60 p-8 text-center space-y-6 transform transition-all">
            <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-serif text-gray-900 tracking-tight">
                Oops! Something went sideways.
              </h1>
              <p className="text-stone-500 text-sm leading-relaxed">
                We encountered an unexpected issue while loading this page.
              </p>
            </div>

            {this.state.error && (
              <div className="mt-6 p-4 bg-stone-100 rounded-lg text-left overflow-auto border border-stone-200/50">
                <p className="text-xs font-mono text-stone-600 font-medium truncate">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <RefreshCw className="w-4 h-4" />
              Return to Dashboard
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
