const RESOURCES = {
  pythonDocs: {type:'READ', label:'Python Tutorial — official docs', url:'https://docs.python.org/3/tutorial/'},
  numpy: {type:'READ', label:'NumPy Learn / Quickstart', url:'https://numpy.org/learn/'},
  colab: {type:'LAB', label:'Google Colab', url:'https://colab.research.google.com/'},
  mml: {type:'BOOK', label:'Mathematics for Machine Learning — free book', url:'https://mml-book.github.io/'},
  mitLA: {type:'COURSE', label:'MIT 18.06SC Linear Algebra — Gilbert Strang', url:'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/'},
  b1bLA: {type:'VIDEO', label:'3Blue1Brown — Essence of Linear Algebra', url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'},
  b1bCalc: {type:'VIDEO', label:'3Blue1Brown — Essence of Calculus', url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'},
  mitCalc: {type:'COURSE', label:'MIT 18.02SC Multivariable Calculus', url:'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/'},
  matrixCalc: {type:'READ', label:'The Matrix Calculus You Need For Deep Learning', url:'https://explained.ai/matrix-calculus/'},
  mitProb: {type:'COURSE', label:'MIT 6.041SC Applied Probability', url:'https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/'},
  mitStats: {type:'COURSE', label:'MIT 18.05 Probability & Statistics', url:'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/'},
  statquest: {type:'VIDEO', label:'StatQuest — statistics & ML videos', url:'https://www.youtube.com/@statquest'},
  boyd: {type:'BOOK', label:'Convex Optimization — Boyd & Vandenberghe', url:'https://web.stanford.edu/~boyd/cvxbook/'},
  stanfordOpt: {type:'COURSE', label:'Stanford EE364a Convex Optimization', url:'https://web.stanford.edu/class/ee364a/'},
  cs229: {type:'COURSE', label:'Stanford CS229 — Machine Learning', url:'https://cs229.stanford.edu/'},
  cs229Notes: {type:'READ', label:'Stanford CS229 — lecture notes & handouts', url:'https://cs229.stanford.edu/materials.html'},
  sklearn: {type:'READ', label:'scikit-learn User Guide', url:'https://scikit-learn.org/stable/user_guide.html'},
  d2l: {type:'BOOK', label:'Dive into Deep Learning — interactive book', url:'https://d2l.ai/'},
  b1bNN: {type:'VIDEO', label:'3Blue1Brown — Neural Networks', url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'},
  karpathyMicrograd: {type:'VIDEO', label:'Karpathy — build micrograd / backprop from scratch', url:'https://www.youtube.com/watch?v=VMj-3S1tku0'},
  karpathyRepo: {type:'LAB', label:'Karpathy — Neural Networks: Zero to Hero repo', url:'https://github.com/karpathy/nn-zero-to-hero'},
  pytorch: {type:'COURSE', label:'PyTorch — Learn the Basics', url:'https://docs.pytorch.org/tutorials/beginner/basics/'},
  cs231n: {type:'COURSE', label:'Stanford CS231n — Computer Vision', url:'https://cs231n.stanford.edu/'},
  cs231nNotes: {type:'READ', label:'CS231n — notes', url:'https://cs231n.github.io/'},
  cs224n: {type:'COURSE', label:'Stanford CS224N — NLP with Deep Learning', url:'https://web.stanford.edu/class/cs224n/'},
  hfCourse: {type:'COURSE', label:'Hugging Face — LLM Course', url:'https://huggingface.co/learn/llm-course/'},
  hfTransformers: {type:'READ', label:'Hugging Face Transformers docs', url:'https://huggingface.co/docs/transformers/'},
  illustratedTransformer: {type:'READ', label:'The Illustrated Transformer — Jay Alammar', url:'https://jalammar.github.io/illustrated-transformer/'},
  karpathyGPT: {type:'VIDEO', label:'Karpathy — Let’s build GPT from scratch', url:'https://www.youtube.com/watch?v=kCc8FmEb1nY'},
  b1bTransformers: {type:'READ', label:'3Blue1Brown — Transformers & attention', url:'https://www.3blue1brown.com/topics/neural-networks'},
  lilianWengGen: {type:'READ', label:'Lilian Weng — What are Diffusion Models?', url:'https://lilianweng.github.io/posts/2021-07-11-diffusion-models/'},
  ddpm: {type:'PAPER', label:'DDPM paper — Denoising Diffusion Probabilistic Models', url:'https://arxiv.org/abs/2006.11239'},
  ganPaper: {type:'PAPER', label:'Generative Adversarial Nets — original paper', url:'https://arxiv.org/abs/1406.2661'},
  vaePaper: {type:'PAPER', label:'Auto-Encoding Variational Bayes — VAE paper', url:'https://arxiv.org/abs/1312.6114'},
  suttonBarto: {type:'BOOK', label:'Reinforcement Learning: An Introduction — Sutton & Barto', url:'http://incompleteideas.net/book/the-book-2nd.html'},
  davidSilver: {type:'VIDEO', label:'David Silver — Reinforcement Learning course', url:'https://www.youtube.com/playlist?list=PLqYmG7hTraZBKeNJ-JE_eyJHZ7XgBoAyb'},
  cs285: {type:'COURSE', label:'UC Berkeley CS285 — Deep Reinforcement Learning', url:'https://rail.eecs.berkeley.edu/deeprlcourse/'},
  fsdl: {type:'COURSE', label:'Full Stack Deep Learning', url:'https://fullstackdeeplearning.com/'},
  madeML: {type:'COURSE', label:'Made With ML — production ML', url:'https://madewithml.com/'},
  papersWithCode: {type:'RESEARCH', label:'Papers with Code', url:'https://paperswithcode.com/'},
  arxiv: {type:'RESEARCH', label:'arXiv — ML / AI papers', url:'https://arxiv.org/'},
  openreview: {type:'RESEARCH', label:'OpenReview — conference papers & reviews', url:'https://openreview.net/'},
  wandb: {type:'TOOL', label:'Weights & Biases — experiment tracking docs', url:'https://docs.wandb.ai/'},
  mlflow: {type:'TOOL', label:'MLflow — experiment tracking & model lifecycle', url:'https://mlflow.org/docs/latest/'},
  fastapi: {type:'TOOL', label:'FastAPI — serving models', url:'https://fastapi.tiangolo.com/'},
  docker: {type:'TOOL', label:'Docker — Get Started', url:'https://docs.docker.com/get-started/'},
  attentionPaper: {type:'PAPER', label:'Attention Is All You Need — original Transformer paper', url:'https://arxiv.org/abs/1706.03762'},
  bertPaper: {type:'PAPER', label:'BERT paper', url:'https://arxiv.org/abs/1810.04805'},
  gpt3Paper: {type:'PAPER', label:'Language Models are Few-Shot Learners — GPT-3', url:'https://arxiv.org/abs/2005.14165'}
};

const PHASES = [
  {
    name:'01 · Scientific Python Reset', short:'Scientific Python', color:'cyan', resources:['numpy','pythonDocs','colab'],
    topics:[
      ['NumPy arrays, shapes & dtypes','Build a mental model of tensors as typed n-dimensional arrays.','Write array creation, reshape, slice and dtype drills without copying examples.'],
      ['Vectorization & broadcasting','Understand why vectorized numerical code maps naturally to ML math.','Replace Python loops with broadcasting and verify numerical equivalence.'],
      ['Linear algebra in NumPy','Connect dot products, matrix multiplication and norms to NumPy operations.','Implement dot, matmul, transpose, norm and cosine similarity from primitives.'],
      ['Randomness & reproducibility','Understand PRNG seeds, sampling and why experiments must be reproducible.','Generate controlled synthetic datasets and compare seeded vs unseeded runs.'],
      ['Numerical stability','Learn overflow, underflow, floating-point error and stable formulations.','Implement stable softmax and log-sum-exp, then stress-test with large numbers.'],
      ['From equation to experiment','Practice translating compact math notation into executable numerical experiments.','Pick a simple ML equation and build a notebook that validates it with plots and assertions.']
    ]
  },
  {
    name:'02 · Linear Algebra I', short:'Linear Algebra I', resources:['b1bLA','mitLA','mml'],
    topics:[
      ['Vectors & vector spaces','Interpret vectors geometrically and algebraically; understand span, basis and dimension.','Solve span/basis problems by hand, then verify rank numerically.'],
      ['Dot products & projections','Connect inner products to angles, similarity and orthogonal projection.','Derive the projection formula and implement vector projection from scratch.'],
      ['Matrices as linear transformations','See a matrix as a function that transforms space, not just a table of numbers.','Visualize 2D linear transforms and recover columns from transformed basis vectors.'],
      ['Systems of linear equations','Understand Ax=b, elimination, pivots and solution structure.','Implement Gaussian elimination for small systems and compare with numpy.linalg.solve.'],
      ['Independence, basis & rank','Understand rank as the amount of independent information in a matrix.','Compute column/row spaces and interpret rank-deficient data matrices.'],
      ['Orthogonality & least squares','Understand why least squares is an orthogonal projection problem.','Derive normal equations and fit a line using matrix algebra only.']
    ]
  },
  {
    name:'03 · Linear Algebra II', short:'Linear Algebra II', resources:['mitLA','mml','b1bLA'],
    topics:[
      ['Determinants & volume','Understand determinant as oriented scaling of area/volume and invertibility.','Calculate determinants by hand and verify geometric scaling numerically.'],
      ['Eigenvalues & eigenvectors','Understand invariant directions and why eigenstructure appears throughout ML.','Compute eigenpairs of simple matrices and visualize repeated transformations.'],
      ['Symmetric matrices & quadratic forms','Connect xᵀAx to curvature, energy and optimization geometry.','Plot quadratic forms and classify positive/negative/indefinite matrices.'],
      ['Singular Value Decomposition','Understand SVD as rotate → scale → rotate and a universal matrix factorization.','Implement low-rank image approximation with SVD and inspect reconstruction error.'],
      ['PCA from first principles','Connect covariance eigenvectors/SVD to maximum-variance directions.','Implement PCA with centering + SVD without sklearn.'],
      ['Matrix norms & conditioning','Understand norms, sensitivity and why ill-conditioned systems hurt optimization.','Construct well/poorly conditioned matrices and measure solution sensitivity.']
    ]
  },
  {
    name:'04 · Calculus for ML', short:'Calculus', resources:['b1bCalc','mitCalc','mml'],
    topics:[
      ['Limits, derivatives & local linearity','Rebuild derivatives as local linear approximations rather than memorized rules.','Differentiate common ML functions and verify with finite differences.'],
      ['Chain rule','Understand composition and why chain rule is the engine of backpropagation.','Expand multi-stage scalar functions and compute derivatives step-by-step.'],
      ['Partial derivatives & gradients','Interpret gradients as directions of steepest local increase.','Compute gradients by hand and numerically for 2D loss surfaces.'],
      ['Directional derivatives','Understand how gradient dot direction predicts local change.','Compare directional derivative predictions against actual function changes.'],
      ['Jacobians','Understand derivatives of vector-valued functions as linear maps.','Build Jacobians for small functions and verify them with finite differences.'],
      ['Hessians & curvature','Connect second derivatives to curvature, saddle points and optimization.','Compute/visualize Hessians of quadratic and non-convex functions.']
    ]
  },
  {
    name:'05 · Matrix Calculus & Autodiff', short:'Matrix Calculus', resources:['matrixCalc','mml','karpathyMicrograd'],
    topics:[
      ['Gradient identities','Learn gradients of dot products, affine maps and quadratic forms.','Derive ∂(xᵀAx)/∂x and verify numerically.'],
      ['Vector chain rule','Understand chain rule with Jacobian products and shape tracking.','Differentiate a two-layer vector function while annotating every tensor shape.'],
      ['Loss gradients','Derive gradients for MSE, sigmoid + BCE and softmax + cross-entropy.','Implement analytical gradients and compare with finite-difference gradients.'],
      ['Computation graphs','Represent expressions as DAGs of primitive operations.','Draw a computation graph and manually propagate local derivatives backward.'],
      ['Reverse-mode autodiff','Understand why reverse-mode is efficient for scalar losses with many parameters.','Implement a tiny scalar autodiff Value class.'],
      ['Gradient checking','Use numerical gradients as a debugging oracle for analytical/autodiff code.','Create reusable gradient-check tests with relative error thresholds.']
    ]
  },
  {
    name:'06 · Probability I', short:'Probability I', resources:['mitProb','mitStats','statquest'],
    topics:[
      ['Sample spaces & events','Model uncertainty with events, set operations and probability axioms.','Solve counting/event problems and confirm with Monte Carlo simulation.'],
      ['Conditional probability','Understand conditioning as restricting the world to known information.','Solve conditional probability problems and simulate them.'],
      ['Bayes’ theorem','Understand prior × likelihood → posterior and base-rate effects.','Build a Bayesian diagnostic-test calculator and test extreme priors.'],
      ['Random variables','Translate uncertain outcomes into numerical variables and distributions.','Create discrete RVs and compute PMFs/CDFs empirically.'],
      ['Expectation & variance','Understand expectation as weighted average and variance as spread around the mean.','Derive E[aX+b] and Var[aX+b], then verify by simulation.'],
      ['Joint distributions','Understand dependence, marginalization, covariance and correlation.','Generate correlated variables and compare covariance vs correlation.']
    ]
  },
  {
    name:'07 · Probability II & Statistics', short:'Statistics', resources:['mitStats','mitProb','statquest'],
    topics:[
      ['Bernoulli, Binomial, Poisson','Understand when each discrete distribution is an appropriate model.','Simulate each distribution and compare sample moments to theory.'],
      ['Uniform, Gaussian, Exponential','Understand core continuous distributions and their parameters.','Sample and visualize PDFs/CDFs; standardize Gaussian variables.'],
      ['Law of Large Numbers & CLT','Understand why averages stabilize and why Gaussians appear so often.','Demonstrate LLN and CLT with repeated simulations.'],
      ['Likelihood & MLE','Distinguish probability from likelihood and estimate parameters from data.','Derive MLE for Bernoulli and Gaussian mean; verify numerically.'],
      ['Confidence intervals & hypothesis tests','Understand sampling uncertainty, p-values and test assumptions.','Construct a confidence interval and a simple permutation test.'],
      ['Bias, variance & estimators','Analyze estimator quality through bias, variance and MSE.','Compare biased/unbiased estimators with repeated sampling experiments.']
    ]
  },
  {
    name:'08 · Optimization', short:'Optimization', resources:['boyd','stanfordOpt','b1bNN'],
    topics:[
      ['Optimization problems & geometry','Identify objective, variables, constraints and feasible sets.','Rewrite ML training objectives in standard optimization form.'],
      ['Gradient descent','Understand step size, descent direction and convergence intuition.','Implement gradient descent on convex and non-convex surfaces.'],
      ['Learning rates & schedules','Understand why optimization is highly sensitive to step-size policy.','Compare constant, decay and cosine schedules on the same objective.'],
      ['Momentum & Nesterov','Understand velocity, damping and accelerated movement through ravines.','Implement momentum and compare trajectories with vanilla GD.'],
      ['Convexity','Understand convex sets/functions and why local minima become globally meaningful.','Test convexity on examples and use Hessians for twice-differentiable cases.'],
      ['Constrained optimization & Lagrange multipliers','Understand constraints through multipliers and KKT intuition.','Solve small equality-constrained problems analytically and numerically.']
    ]
  },
  {
    name:'09 · Regression & Generalized Linear Models', short:'Regression', resources:['cs229','cs229Notes','sklearn'],
    topics:[
      ['Linear regression','Derive least squares from geometry and probabilistic assumptions.','Implement normal-equation and gradient-descent regression from scratch.'],
      ['Probabilistic view of regression','Connect Gaussian noise assumptions to maximum likelihood and MSE.','Derive the likelihood and recover least squares as MLE.'],
      ['Regularization','Understand L2/L1 penalties, shrinkage and sparsity.','Implement ridge; compare coefficients and conditioning across λ values.'],
      ['Logistic regression','Derive sigmoid probabilities, log-likelihood and cross-entropy.','Implement binary logistic regression with gradient descent.'],
      ['Generalized linear models','Understand exponential family, link functions and a unified modeling view.','Map Bernoulli/Gaussian/Poisson examples into the GLM framework.'],
      ['Regression diagnostics','Understand residuals, leakage, nonlinearity and mis-specified assumptions.','Audit a regression model and write a short diagnostic report.']
    ]
  },
  {
    name:'10 · Classification, SVMs & Kernels', short:'SVMs & Kernels', resources:['cs229','cs229Notes','statquest'],
    topics:[
      ['Decision boundaries & margins','Think geometrically about classifiers and confidence.','Plot linear boundaries and signed distances for synthetic data.'],
      ['Perceptron','Understand mistake-driven linear classification and separability.','Implement perceptron learning and visualize updates.'],
      ['Support Vector Machines','Understand maximum-margin classification and support vectors.','Derive hard-margin intuition and train an SVM on 2D data.'],
      ['Soft margins & hinge loss','Understand slack variables, C and robustness to overlap.','Sweep C and explain how the margin and errors change.'],
      ['Kernel trick','Understand implicit feature spaces via inner products.','Implement polynomial/RBF kernel matrices and visualize non-linear separation.'],
      ['Multiclass classification','Compare one-vs-rest, softmax and structured decision strategies.','Implement softmax multiclass regression from scratch.']
    ]
  },
  {
    name:'11 · Trees, Ensembles & Tabular ML', short:'Trees & Ensembles', resources:['sklearn','statquest','cs229'],
    topics:[
      ['Decision trees','Understand recursive partitioning, impurity and greedy split selection.','Implement a tiny 1D decision stump and entropy/Gini calculations.'],
      ['Bagging','Understand variance reduction through resampled independent learners.','Build a small bagging ensemble and compare variance across runs.'],
      ['Random forests','Understand feature subsampling, decorrelation and out-of-bag intuition.','Train forests and inspect OOB/permutation importance.'],
      ['Boosting','Understand sequential error correction and additive modeling.','Implement simple AdaBoost on decision stumps.'],
      ['Gradient boosting','Connect boosting to gradient descent in function space.','Train gradient boosting and inspect residual fitting stage by stage.'],
      ['Feature engineering & leakage','Understand why preprocessing choices can dominate tabular performance.','Build a leakage-safe pipeline with proper train-only transformations.']
    ]
  },
  {
    name:'12 · Unsupervised & Probabilistic Models', short:'Unsupervised', resources:['cs229Notes','sklearn','mml'],
    topics:[
      ['k-means clustering','Understand alternating assignment/update optimization and failure modes.','Implement k-means from scratch and test initialization sensitivity.'],
      ['Gaussian Mixture Models','Understand soft clustering as a probabilistic latent-variable model.','Fit a GMM and visualize component responsibilities.'],
      ['Expectation-Maximization','Understand EM as alternating latent inference and parameter maximization.','Derive the GMM E/M steps at a high level and implement a toy version.'],
      ['PCA revisited','Connect dimensionality reduction to variance, reconstruction and latent structure.','Compare PCA via covariance eigenvectors vs direct SVD.'],
      ['Density estimation','Understand parametric vs non-parametric density estimation.','Compare Gaussian, KDE and histogram estimates on synthetic data.'],
      ['Latent variables','Build intuition for hidden causes and probabilistic graphical structure.','Sketch a latent-variable model and explain observed vs hidden variables.']
    ]
  },
  {
    name:'13 · Learning Theory & Model Evaluation', short:'Learning Theory', resources:['cs229Notes','sklearn','mitStats'],
    topics:[
      ['Generalization','Separate training fit from performance on unseen samples.','Run repeated train/test experiments and measure generalization gap.'],
      ['Bias–variance tradeoff','Understand underfitting/overfitting through expected error decomposition.','Create learning curves for models of increasing complexity.'],
      ['Cross-validation','Understand model selection without contaminating the final test set.','Implement K-fold CV manually and compare with sklearn.'],
      ['Metrics & thresholding','Choose metrics based on decision costs and class imbalance.','Plot ROC/PR curves and tune a threshold for a stated objective.'],
      ['Calibration & uncertainty','Distinguish ranking accuracy from trustworthy probabilities.','Create a reliability diagram and calibrate a classifier.'],
      ['Data shift & robustness','Understand covariate shift, label shift and distribution mismatch.','Simulate a train/test shift and document what breaks.']
    ]
  },
  {
    name:'14 · Neural Networks from First Principles', short:'Neural Nets I', resources:['b1bNN','karpathyMicrograd','d2l'],
    topics:[
      ['Perceptrons & MLPs','Understand neurons, layers, affine transforms and nonlinear activations.','Implement a tiny MLP forward pass using only NumPy.'],
      ['Activation functions','Compare sigmoid, tanh, ReLU, GELU and gradient flow.','Plot activations/derivatives and test saturation behavior.'],
      ['Loss functions','Understand objective design for regression and classification.','Implement MSE, BCE and multiclass cross-entropy carefully.'],
      ['Backpropagation intuition','Understand reverse credit assignment through the computation graph.','Manually backpropagate through a two-neuron network.'],
      ['Backpropagation calculus','Derive layer-wise gradients with matrix calculus and shape checks.','Derive dW, db, dX for an affine + activation layer.'],
      ['Build micrograd-like autodiff','Solidify backprop by implementing reverse-mode autodiff yourself.','Finish a scalar autodiff engine and train a tiny MLP.']
    ]
  },
  {
    name:'15 · Deep Learning Training & PyTorch', short:'Neural Nets II', resources:['pytorch','d2l','karpathyRepo'],
    topics:[
      ['Tensors & autograd in PyTorch','Map mathematical tensors and computation graphs to PyTorch APIs.','Recreate a NumPy MLP in PyTorch and inspect gradients.'],
      ['Initialization','Understand variance propagation and Xavier/He initialization.','Measure activation/gradient statistics under different initializations.'],
      ['Normalization','Understand BatchNorm/LayerNorm as optimization and representation tools.','Implement normalization formulas and compare training behavior.'],
      ['Regularization','Understand dropout, weight decay, early stopping and data augmentation.','Run controlled experiments that isolate each regularizer.'],
      ['Modern optimizers','Compare SGD, momentum, RMSProp, Adam and AdamW.','Train the same network with multiple optimizers and plot learning curves.'],
      ['Training loop engineering','Learn clean datasets, loaders, devices, checkpoints and reproducible experiments.','Build a reusable PyTorch training/evaluation loop from scratch.']
    ]
  },
  {
    name:'16 · Convolutional Neural Networks', short:'CNNs', resources:['cs231n','cs231nNotes','pytorch'],
    topics:[
      ['Convolution operation','Understand local connectivity, weight sharing, stride and padding.','Implement 2D convolution for one channel with nested loops.'],
      ['CNN feature hierarchies','Understand why stacked filters build increasingly abstract spatial features.','Visualize intermediate feature maps from a trained CNN.'],
      ['Pooling & downsampling','Understand receptive fields, invariance and spatial compression.','Calculate receptive fields and compare max/avg pooling.'],
      ['Classic CNN architectures','Study LeNet, AlexNet, VGG and the evolution of depth/compute.','Recreate a compact VGG-style network and count parameters.'],
      ['Residual networks','Understand skip connections and optimization of very deep nets.','Implement a residual block and compare gradient flow.'],
      ['Transfer learning','Use pretrained representations responsibly for limited-data tasks.','Fine-tune a pretrained vision model on a small dataset.']
    ]
  },
  {
    name:'17 · Modern Computer Vision', short:'Vision', resources:['cs231n','pytorch','papersWithCode'],
    topics:[
      ['Data augmentation','Understand invariances and how augmentations change the effective data distribution.','Design an augmentation policy and run an ablation study.'],
      ['Object detection concepts','Understand localization, anchors, IoU, NMS and detection metrics.','Implement IoU and non-maximum suppression on toy boxes.'],
      ['Segmentation','Understand pixel-wise prediction, encoder–decoder networks and skip features.','Train or adapt a small segmentation model on a toy dataset.'],
      ['Vision Transformers','Understand image patches, positional information and self-attention for vision.','Implement patchification and a tiny ViT-style encoder block.'],
      ['Self-supervised vision','Understand representation learning without manual labels.','Compare contrastive-learning intuition with supervised pretraining.'],
      ['Vision project','Integrate preprocessing, model, training, evaluation and error analysis.','Build a small end-to-end vision project with a clear report.']
    ]
  },
  {
    name:'18 · RNNs & Sequence Modeling', short:'RNNs', resources:['cs224n','d2l','pytorch'],
    topics:[
      ['Sequence modeling setup','Understand time-dependent inputs, hidden state and sequence objectives.','Create a next-step prediction dataset and baseline.'],
      ['Vanilla RNN','Derive recurrent updates and backpropagation through time.','Implement a simple RNN cell from equations.'],
      ['Vanishing/exploding gradients','Understand repeated Jacobian products across long sequences.','Simulate gradient norms over sequence length.'],
      ['LSTM','Understand gates, cell state and improved long-range credit assignment.','Implement an LSTM cell from equations or inspect PyTorch internals.'],
      ['GRU','Compare streamlined gating with LSTM.','Implement/compare GRU and LSTM on the same small task.'],
      ['Sequence-to-sequence','Understand encoder–decoder modeling before attention.','Build a tiny seq2seq model and inspect failure on long contexts.']
    ]
  },
  {
    name:'19 · NLP Foundations & Embeddings', short:'NLP Foundations', resources:['cs224n','d2l','hfCourse'],
    topics:[
      ['Tokenization & language modeling','Understand discrete text units and next-token probabilistic modeling.','Build word/character tokenizers and compare vocabulary tradeoffs.'],
      ['n-grams & smoothing','Build classical language-model intuition before neural methods.','Implement bigram counts and perplexity on a tiny corpus.'],
      ['Word embeddings','Understand distributional semantics and dense vector representations.','Train or inspect embeddings and test semantic neighborhoods.'],
      ['Word2Vec objectives','Understand skip-gram/CBOW and negative sampling.','Derive the objective at a high level and code a tiny skip-gram experiment.'],
      ['Text classification','Apply sequence representations to supervised NLP.','Train a compact text classifier and analyze token-level errors.'],
      ['NLP evaluation & preprocessing','Understand perplexity, accuracy/F1, tokenization pitfalls and dataset leakage.','Create an evaluation checklist for a text modeling task.']
    ]
  },
  {
    name:'20 · Attention & Transformers', short:'Transformers', resources:['attentionPaper','illustratedTransformer','b1bTransformers'],
    topics:[
      ['Attention intuition','Understand content-based retrieval as weighted combinations of values.','Calculate a tiny attention example by hand.'],
      ['Queries, keys & values','Understand Q/K/V projections and similarity scores.','Implement scaled dot-product attention with NumPy.'],
      ['Multi-head attention','Understand parallel representation subspaces and concatenation.','Implement a small multi-head attention module in PyTorch.'],
      ['Positional information','Understand why attention needs sequence position signals.','Implement sinusoidal positional encodings and inspect patterns.'],
      ['Transformer block','Understand residuals, LayerNorm, attention and MLP sublayers.','Build a minimal Transformer block from PyTorch primitives.'],
      ['Causal masking','Understand autoregressive constraints and triangular attention masks.','Implement masked self-attention and verify no future leakage.']
    ]
  },
  {
    name:'21 · LLMs from Scratch', short:'LLMs', resources:['karpathyGPT','hfCourse','cs224n'],
    topics:[
      ['Autoregressive language models','Connect conditional probability factorization to next-token training.','Compute sequence log-likelihood and perplexity from token probabilities.'],
      ['Build a tiny GPT','Assemble embeddings, causal attention, MLPs and LM head into one model.','Follow/build a small GPT and train on a tiny text corpus.'],
      ['Sampling','Understand greedy, temperature, top-k and nucleus sampling.','Implement sampling strategies and compare generated diversity.'],
      ['Scaling & compute','Understand parameter/data/compute tradeoffs and training bottlenecks.','Estimate memory and FLOPs for toy Transformer configurations.'],
      ['BERT vs GPT','Contrast masked bidirectional pretraining with causal autoregressive modeling.','Map architecture/objective differences to downstream use cases.'],
      ['Fine-tuning & parameter-efficient tuning','Understand supervised fine-tuning, adapters and LoRA intuition.','Fine-tune or simulate a small pretrained model with a tiny dataset.']
    ]
  },
  {
    name:'22 · RAG, Alignment & Agents', short:'Applied LLMs', resources:['hfCourse','hfTransformers','gpt3Paper'],
    topics:[
      ['Embeddings & semantic retrieval','Understand vector search as nearest-neighbor retrieval in representation space.','Build a small semantic search system over your own notes.'],
      ['Retrieval-Augmented Generation','Understand indexing, chunking, retrieval and grounded generation.','Build a minimal local RAG pipeline and evaluate retrieval quality.'],
      ['Instruction tuning','Understand how supervised examples shape model behavior.','Create a tiny instruction dataset and inspect formatting/tokenization.'],
      ['Preference optimization & RLHF intuition','Understand reward modeling, preference data and alignment objectives conceptually.','Write a clear pipeline diagram from base model to aligned assistant.'],
      ['Tool use & agents','Understand LLM orchestration, tool calling, state and failure recovery.','Build a toy agent loop with one deterministic tool.'],
      ['LLM evaluation & safety','Understand hallucination, prompt injection, benchmark leakage and task-specific evaluation.','Create an eval set and score a small LLM/RAG workflow manually.']
    ]
  },
  {
    name:'23 · Generative Models & Reinforcement Learning', short:'GenAI + RL', resources:['vaePaper','ganPaper','lilianWengGen','ddpm','suttonBarto','davidSilver','cs285'],
    topics:[
      ['Variational Autoencoders','Understand latent-variable generative modeling, ELBO and reparameterization intuition.','Build a small VAE or derive its loss terms carefully.'],
      ['GANs','Understand generator–discriminator minimax training and instability.','Train a tiny GAN and observe mode collapse / training dynamics.'],
      ['Diffusion models','Understand forward noising, reverse denoising and score/noise prediction.','Implement a simple 1D/2D diffusion toy process or follow a compact notebook.'],
      ['MDPs & Bellman equations','Understand states, actions, rewards, returns and recursive value functions.','Solve a tiny MDP by hand using Bellman equations.'],
      ['Value-based RL','Understand Monte Carlo, TD learning and Q-learning.','Implement tabular Q-learning on a small environment.'],
      ['Policy gradients & actor-critic','Understand direct policy optimization and variance reduction.','Derive REINFORCE intuition and implement a minimal policy-gradient agent.']
    ]
  },
  {
    name:'24 · ML Systems, Research & Capstone', short:'Systems + Research', resources:['fsdl','madeML','wandb','mlflow','fastapi','docker','papersWithCode','arxiv','openreview'],
    topics:[
      ['Experiment design & tracking','Treat ML work as controlled science with configs, seeds, metrics and artifacts.','Track a real experiment and create a reproducible run summary.'],
      ['Data & model pipelines','Understand training/serving pipelines, validation and reproducible data transformations.','Refactor a notebook into a clean pipeline with configuration.'],
      ['Model serving & containers','Understand APIs, dependency isolation and deployment boundaries.','Serve a model with FastAPI and containerize it with Docker.'],
      ['Reading papers efficiently','Learn to extract problem, method, assumptions, experiments and limitations from papers.','Read one paper and produce a one-page structured research note.'],
      ['Paper reproduction','Understand reproducibility gaps, baselines and ablation studies.','Reproduce one meaningful result from a manageable paper/repository.'],
      ['Capstone: research-grade AI project','Integrate theory, implementation, evaluation and communication into one portfolio artifact.','Design and execute a capstone with baseline, math explanation, ablations, error analysis and final report.']
    ]
  }
];

function buildCurriculum(){
  const days=[]; let globalDay=1;
  PHASES.forEach((phase,pIndex)=>{
    phase.topics.forEach((topic,tIndex)=>{
      const [name,concept,practice]=topic;
      const baseResources=phase.resources.map(k=>RESOURCES[k]).filter(Boolean);
      days.push({
        day:globalDay++, phaseIndex:pIndex, phase:phase.name, phaseShort:phase.short, type:'concept',
        title:name,
        objective:concept,
        tasks:[
          ['LEARN',`Study the core idea: ${concept}`],
          ['NOTES',`Write a one-page explanation of “${name}” in your own words. No copy-paste.`],
          ['MATH',`Work through at least 3 small hand-calculations or symbolic examples related to ${name.toLowerCase()}.`],
          ['RECALL',`Close everything and answer: What problem does this solve? What assumptions does it make? Where can it fail?`]
        ],
        resources:baseResources.slice(0,3),
        deliverable:`One clean concept note + worked examples for ${name}.`, time:'2–3 h'
      });
      days.push({
        day:globalDay++, phaseIndex:pIndex, phase:phase.name, phaseShort:phase.short, type:'practice',
        title:`${name} · derive & build`,
        objective:practice,
        tasks:[
          ['DERIVE',`Derive the key equation/algorithm for ${name.toLowerCase()} from the assumptions you studied yesterday.`],
          ['CODE',practice],
          ['VERIFY',`Create at least 2 numerical checks, assertions, plots or gradient checks that prove your implementation behaves correctly.`],
          ['EXPLAIN',`Write 5–8 lines explaining the gap between the mathematical definition and the library/API implementation.`]
        ],
        resources:[...baseResources].reverse().slice(0,3),
        deliverable:`A runnable notebook/script for ${name} with tests + a short derivation.`, time:'2.5–3.5 h'
      });
      if(tIndex===2 || tIndex===5){
        const blockStart=globalDay-6;
        const blockEnd=globalDay-1;
        days.push({
          day:globalDay++, phaseIndex:pIndex, phase:phase.name, phaseShort:phase.short, type:'review',
          title:`Review & synthesis · ${phase.short}`,
          objective:`Consolidate Days ${blockStart}–${blockEnd}. Retrieval first; re-reading second.`,
          tasks:[
            ['RECALL',`Without notes, write everything you remember from Days ${blockStart}–${blockEnd} for 20 minutes.`],
            ['QUIZ',`Create and answer 12 questions: 4 conceptual, 4 mathematical, 4 implementation/debugging.`],
            ['REBUILD',`Choose one implementation from this block and rebuild the core of it from a blank file.`],
            ['SYNTHESIZE',`Write a “how these ideas connect” page and list the 3 weakest points to revisit next week.`]
          ],
          resources:phase.resources.map(k=>RESOURCES[k]).filter(Boolean).slice(0,3),
          deliverable:`Weekly review sheet + one rebuilt implementation + weakness list.`, time:'2–3 h'
        });
      }
    });
  });
  return days;
}

const CURRICULUM=buildCurriculum();
const TOTAL_DAYS=CURRICULUM.length;
const STORAGE={start:'aiDeepTrack.startDate',tasks:'aiDeepTrack.tasks'};
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

function localISO(date=new Date()){
  const y=date.getFullYear(), m=String(date.getMonth()+1).padStart(2,'0'), d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function parseLocalISO(s){ const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d,12,0,0); }
function dayDiff(a,b){ return Math.floor((new Date(b.getFullYear(),b.getMonth(),b.getDate(),12)-new Date(a.getFullYear(),a.getMonth(),a.getDate(),12))/86400000); }
function getStart(){ let s=localStorage.getItem(STORAGE.start); if(!s){s=localISO();localStorage.setItem(STORAGE.start,s);} return s; }
function getTodayIndex(){ return Math.max(0,Math.min(TOTAL_DAYS-1,dayDiff(parseLocalISO(getStart()),new Date()))); }
function getRawTodayIndex(){ return dayDiff(parseLocalISO(getStart()),new Date()); }
function getTaskState(){ try{return JSON.parse(localStorage.getItem(STORAGE.tasks)||'{}')}catch{return{}} }
function saveTaskState(state){localStorage.setItem(STORAGE.tasks,JSON.stringify(state));}
function taskKey(day,idx){return `${day}:${idx}`;}
function isTaskDone(day,idx){return !!getTaskState()[taskKey(day,idx)];}
function isDayDone(dayObj){const s=getTaskState();return dayObj.tasks.every((_,i)=>!!s[taskKey(dayObj.day,i)]);}
function getUnlockedIndex(){
  const raw=getRawTodayIndex();
  if(raw<0)return -1;
  let idx=Math.min(raw,TOTAL_DAYS-1);
  while(idx<TOTAL_DAYS-1 && isDayDone(CURRICULUM[idx]))idx++;
  return idx;
}
function getActiveIndex(){
  const raw=getRawTodayIndex();
  if(raw<0)return 0;
  if(raw>=TOTAL_DAYS){
    const firstIncomplete=CURRICULUM.findIndex(d=>!isDayDone(d));
    return firstIncomplete===-1?TOTAL_DAYS-1:firstIncomplete;
  }
  return getUnlockedIndex();
}
function isDayAccessible(dayNumber){
  const raw=getRawTodayIndex(), idx=dayNumber-1;
  if(raw<0)return false;
  if(raw>=TOTAL_DAYS)return true;
  return idx<=getUnlockedIndex() || isDayDone(CURRICULUM[idx]);
}
function setTask(day,idx,value){const s=getTaskState();s[taskKey(day,idx)]=value;saveTaskState(s);renderAll();}
function setDay(dayObj,value){const s=getTaskState();dayObj.tasks.forEach((_,i)=>s[taskKey(dayObj.day,i)]=value);saveTaskState(s);renderAll();}

function formatDateForDay(dayNumber){
  const d=parseLocalISO(getStart()); d.setDate(d.getDate()+dayNumber-1);
  return d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'});
}
function computeDoneCount(){return CURRICULUM.filter(isDayDone).length;}
function computeStreak(){
  const raw=getRawTodayIndex(); if(raw<0)return 0;
  let i=Math.min(raw,TOTAL_DAYS-1);
  if(i>=0 && !isDayDone(CURRICULUM[i])) i--;
  let streak=0; for(;i>=0;i--){if(isDayDone(CURRICULUM[i]))streak++;else break;} return streak;
}

function resourceHTML(resources){return resources.map(r=>`<a class="resource-link" href="${r.url}" target="_blank" rel="noopener"><span>${escapeHTML(r.label)}</span><span class="resource-type">${r.type}</span></a>`).join('');}
function tasksHTML(dayObj,interactive=true){
  return `<div class="checklist">${dayObj.tasks.map((t,i)=>{
    const done=isTaskDone(dayObj.day,i);
    return `<div class="task-item ${done?'done':''}" ${interactive?`data-task-day="${dayObj.day}" data-task-index="${i}"`:''}>
      <div class="task-check">${done?'✓':''}</div><div><div class="task-kicker">${t[0]}</div><div class="task-copy">${escapeHTML(t[1])}</div></div></div>`;
  }).join('')}</div>`;
}
function missionHTML(dayObj,interactive=true){
  const done=isDayDone(dayObj), accessible=isDayAccessible(dayObj.day), locked=!accessible, ahead=dayObj.day-1>getRawTodayIndex();
  const notice=interactive&&ahead&&accessible?`<div class="mission-notice">Unlocked early because your previous mission is complete. Scheduled for ${formatDateForDay(dayObj.day)}.</div>`:
    interactive&&locked?`<div class="mission-notice locked">Complete the previous unlocked mission to start this one. Scheduled for ${formatDateForDay(dayObj.day)}.</div>`:'';
  return `<div class="mission-top"><div><div class="mission-phase">${escapeHTML(dayObj.phase)} · ${dayObj.type.toUpperCase()}</div><h3 class="mission-title">${escapeHTML(dayObj.title)}</h3><div class="mission-objective">${escapeHTML(dayObj.objective)}</div></div><div class="mission-time">~ ${dayObj.time}</div></div>
  ${notice}<div class="mission-grid"><div>${tasksHTML(dayObj,interactive&&accessible)}</div><aside><div class="resources-box"><h4>STUDY LINKS</h4>${resourceHTML(dayObj.resources)}</div><div class="deliverable"><h4>END-OF-DAY OUTPUT</h4><p>${escapeHTML(dayObj.deliverable)}</p></div>
  ${interactive?`<button class="complete-day-btn ${done?'completed':''}" ${locked?'disabled title="Complete the previous unlocked mission first"':''} data-complete-day="${dayObj.day}">${locked?'LOCKED · PREVIEW':done?'✓ DAY COMPLETE':'MARK WHOLE DAY COMPLETE'}</button>`:''}</aside></div>`;
}
function escapeHTML(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}

function renderHeaderStats(){
  const done=computeDoneCount(), pct=Math.round(done/TOTAL_DAYS*100), streak=computeStreak();
  $('#programLength').textContent=`${TOTAL_DAYS} DAYS`; $('#doneCount').textContent=done; $('#streakCount').textContent=streak;
  $('#sidebarProgress').style.width=`${pct}%`; $('#progressPercent').textContent=`${pct}%`; $('#orbitRing').style.background=`conic-gradient(var(--neon) ${pct*3.6}deg,#171719 0)`;
}
function renderPhaseNav(){
  const active=CURRICULUM[getActiveIndex()];
  const selected=$('#phaseFilter').value||'all';
  $('#phaseNav').innerHTML=PHASES.map((p,i)=>`<a href="#phase-${i}" class="phase-link ${active.phaseIndex===i?'active':''}" data-phase-filter="${i}"><span class="phase-dot"></span><span>${escapeHTML(p.name)}</span></a>`).join('');
  $('#phaseFilter').innerHTML='<option value="all">All phases</option>'+PHASES.map((p,i)=>`<option value="${i}">${escapeHTML(p.short)}</option>`).join('');
  $('#phaseFilter').value=[...$('#phaseFilter').options].some(o=>o.value===selected)?selected:'all';
}
function renderToday(){
  const raw=getRawTodayIndex();
  if(raw<0){
    $('#todayDate').textContent=`Starts ${parseLocalISO(getStart()).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}`;
    $('#dayBadge').textContent=`STARTS IN ${Math.abs(raw)} DAY${Math.abs(raw)===1?'':'S'}`;
    $('#todayCard').innerHTML=missionHTML(CURRICULUM[0],false); return;
  }
  if(raw>=TOTAL_DAYS && computeDoneCount()===TOTAL_DAYS){
    $('#todayDate').textContent='Program complete'; $('#dayBadge').textContent=`${TOTAL_DAYS} / ${TOTAL_DAYS}`;
    $('#todayCard').innerHTML=`<div class="mission-top"><div><div class="mission-phase">FINAL STATUS</div><h3 class="mission-title">You reached the end of the mapped curriculum.</h3><div class="mission-objective">Use the roadmap below to revisit weak phases, reproduce papers, and deepen the capstone.</div></div></div>`;return;
  }
  const activeIndex=getActiveIndex(), d=CURRICULUM[activeIndex], ahead=activeIndex>raw;
  $('#todayDate').textContent=ahead?'Next unlocked mission':new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
  $('#dayBadge').textContent=`DAY ${d.day} / ${TOTAL_DAYS}`;
  $('#todayCard').innerHTML=missionHTML(d,true);
}
function renderRoadmap(){
  const q=$('#searchInput').value.trim().toLowerCase(); const pf=$('#phaseFilter').value; const raw=getRawTodayIndex(), activeIndex=getActiveIndex();
  const filtered=CURRICULUM.filter(d=>{
    const phaseOK=pf==='all'||String(d.phaseIndex)===pf;
    const text=`${d.title} ${d.phase} ${d.objective}`.toLowerCase(); return phaseOK&&(!q||text.includes(q));
  });
  $('#roadmapGrid').innerHTML=filtered.map(d=>{
    const idx=d.day-1, completed=isDayDone(d), current=idx===activeIndex, accessible=isDayAccessible(d.day), locked=!accessible, unlocked=accessible&&idx>raw&&!completed;
    const status=completed?'DONE':locked?'LOCKED':current?'NOW':unlocked?'UNLOCKED':'OPEN';
    return `<article id="${d.day%14===1?`phase-${d.phaseIndex}`:''}" class="day-card ${completed?'completed':''} ${current?'current':''} ${locked?'locked':''} ${unlocked?'unlocked':''}" data-day-card="${d.day}"><div class="day-num">DAY ${String(d.day).padStart(3,'0')} · ${formatDateForDay(d.day)}</div><h3>${escapeHTML(d.title)}</h3><div class="day-phase">${escapeHTML(d.phaseShort)}</div><div class="day-footer"><span>${d.type.toUpperCase()} · ${d.time}</span><span class="day-status"><span class="status-dot"></span>${status}</span></div></article>`;
  }).join('') || '<div class="muted">No roadmap days match this filter.</div>';
}
function renderAll(){renderHeaderStats();renderPhaseNav();renderToday();renderRoadmap();bindDynamic();}

function bindDynamic(){
  $$('[data-task-day]').forEach(el=>el.addEventListener('click',()=>{const d=Number(el.dataset.taskDay),i=Number(el.dataset.taskIndex);setTask(d,i,!isTaskDone(d,i));}));
  $$('[data-complete-day]').forEach(btn=>btn.addEventListener('click',()=>{if(btn.disabled)return;const d=CURRICULUM[Number(btn.dataset.completeDay)-1];setDay(d,!isDayDone(d));}));
  $$('[data-day-card]').forEach(card=>card.addEventListener('click',()=>openDay(Number(card.dataset.dayCard))));
}
function openDay(dayNumber){
  const d=CURRICULUM[dayNumber-1], accessible=isDayAccessible(dayNumber), ahead=dayNumber-1>getRawTodayIndex();
  const status=!accessible?'Locked preview':ahead?'Unlocked early':d.time;
  $('#dayDialog').innerHTML=`<div class="modal-body"><div class="modal-head"><div><div class="modal-phase">DAY ${d.day} · ${escapeHTML(d.phase)}</div><h3>${escapeHTML(d.title)}</h3><div class="muted">${formatDateForDay(d.day)} · ${status}</div></div><button class="icon-btn" data-close-dialog>✕</button></div><div style="margin-top:18px">${missionHTML(d,true)}</div></div>`;
  if(!$('#dayDialog').open) $('#dayDialog').showModal();
  $('#dayDialog').querySelector('[data-close-dialog]').addEventListener('click',()=>$('#dayDialog').close());
  $('#dayDialog').querySelectorAll('[data-task-day]').forEach(el=>el.addEventListener('click',()=>{const i=Number(el.dataset.taskIndex);setTask(d.day,i,!isTaskDone(d.day,i));openDay(d.day);}));
  const c=$('#dayDialog').querySelector('[data-complete-day]'); if(c)c.addEventListener('click',()=>{setDay(d,!isDayDone(d));openDay(d.day);});
}

function init(){
  $('#startDate').value=getStart();
  renderPhaseNav(); renderAll();
  $('#searchInput').addEventListener('input',renderRoadmap); $('#phaseFilter').addEventListener('change',renderRoadmap);
  $('#todayBtn').addEventListener('click',()=>{window.scrollTo({top:document.querySelector('.today-section').offsetTop-70,behavior:'smooth'});});
  $('#settingsBtn').addEventListener('click',()=>{$('#startDate').value=getStart();$('#settingsDialog').showModal();});
  $('#startDate').addEventListener('change',e=>{if(e.target.value){localStorage.setItem(STORAGE.start,e.target.value);renderPhaseNav();renderAll();}});
  $('#resetStartBtn').addEventListener('click',()=>{localStorage.setItem(STORAGE.start,localISO());$('#startDate').value=getStart();renderPhaseNav();renderAll();});
  $('#clearProgressBtn').addEventListener('click',()=>{if(confirm('Clear all completed tasks on this device?')){localStorage.removeItem(STORAGE.tasks);renderAll();}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#dayDialog').open)$('#dayDialog').close();});
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
init();
