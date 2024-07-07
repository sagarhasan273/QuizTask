export const add_options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export function validateQuestionData(questionData) {
  // Check for empty or undefined values in top-level fields
  if (
    !questionData ||
    !questionData.answerType ||
    !questionData.question ||
    !Array.isArray(questionData.answerList) ||
    !Array.isArray(questionData.optionsList)
  ) {
    return true;
  }

  // Check if answerList has at least one element
  if (questionData.answerList.length === 0) {
    return true;
  }

  // Check each option in optionsList
  if (questionData.optionsList.some((option) => !option.optionLabel || !option.optionValue)) {
    return true;
  }

  // If all checks pass, data is valid
  return false;
}
