export const formatRelativeTime = (date: string) => {
    const createdAt = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdAt.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffSeconds = Math.ceil(diffTime / 1000);
  
    if (diffSeconds < 60) {
      return `há ${diffSeconds} segundos`;
    }
    if (diffMinutes < 60) {
      return `há ${diffMinutes} minutos`;
    }
    if (diffHours < 24) {
      return `há ${diffHours} horas`;
    }
    if (diffDays === 1) {
      return `há ${diffDays} dia`;
    }
    if (diffDays > 1) {
      return `há ${diffDays} dias`;
    }
  };