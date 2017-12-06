class LoggerController < ApplicationController
  def create

    # type : debug|info|warn|error|fatal
    logType = params['type'].downcase
    logMessage = params['message']

    case logType
    when 'debug'
      logger.debug logMessage
    when 'warn'
      logger.warn logMessage
    when 'error'
      logger.error logMessage
    when 'fatal'
      logger.fatal logMessage
    else
      logger.info logMessage
    end

    # Ajax call, don't render anything and just send an OK
    head :ok
  end
end