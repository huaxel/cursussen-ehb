from sklearn.linear_model import SGDClassifier
from sklearn.multiclass import OneVsRestClassifier

# Probeer een OneVsRestClassifier met een linear regressie model
linear = SGDClassifier(loss='hinge', max_iter=1000)  # Using hinge loss for SVM-like behavior
clinearf = OneVsRestClassifier(linear)

clinearf.fit(xtrain_tfidf, ytrain) 