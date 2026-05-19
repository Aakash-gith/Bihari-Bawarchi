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
        <div className="min-h-screen bg-stone-50/50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
          <div className="max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
            <div className="p-8 sm:p-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                  <AlertCircle className="w-7 h-7 text-red-500" />
                </div>
                <div className="flex-1 space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
                    Oops! Something went sideways.
                  </h1>
                  <p className="text-stone-500 text-base leading-relaxed">
                    We apologize, but an unexpected error has occurred while rendering this view. Our system has safely contained the issue.
                  </p>
                </div>
              </div>

              {this.state.error && (
                <div className="mt-8 bg-stone-50 rounded-xl p-5 border border-stone-200/60 shadow-inner">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Error Details</span>
                  </div>
                  <p className="text-sm font-mono text-stone-700 font-medium whitespace-pre-wrap break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-end">
                <button
                  onClick={this.handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-brand-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600"
                >
                  <RefreshCw className="w-4 h-4" />
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
