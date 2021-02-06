unit sub MAIN(Bool :$use-placeholder); #= set flag to change all images to basic placeholder PNG

my $file = 'source/partials/_painting.erb';

my $contents = slurp $file;
my $updated-text = $use-placeholder
  ?? do {say 'Using placeholders'; $contents.subst("painting.image", "'green-gradient.png'", :g)}
  !! do {say 'Using real images'; $contents.subst("'green-gradient.png'", "painting.image", :g)};

spurt $file, $updated-text;
